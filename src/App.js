// React Components
import React, { Component } from 'react';
import SideBar from './components/SideBar';
import DocsContainer from './containers/DocsContainer'
import EditorContainer from './containers/EditorContainer';
import ToastContainer from './containers/ToastContainer';
import Home from './components/Home';
import UnAuthorization from './containers/UnAuthorization';
import Modal from './containers/Modal';
import Prompter from './components/Prompter';
// Styling related
import './styles/App.scss';
// routing
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
// state management.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAuth, getDocList, getToast } from './state/selectors/appSelector';
import { 
  confirmRequest,
  signInRequest,
  signUpRequest,
  signOutRequest,
  requestCurrentUser
} from './state/actions/authRequest';
import { 
  createNewDoc,
  updateDoc,
  queryDocs
} from './state/actions/api_request';
import ToastActions from './state/actions/toast';
import { SetDocRequest } from './state/actions/doc';
// utils.
import asyncComponent from './utils/asyncComponent';
const AsyncAuthentication = asyncComponent(() => import('./containers/Authentication'));
const AsyncConfirm = asyncComponent(() => import('./containers/ConfirmContainer'));
const mapStateToProps = (state) => {
  const auth = getAuth();
  const docList = getDocList();
  const toast = getToast();
  return {
    auth: auth(state),
    docList: docList(state),
    toast: toast(state)
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    confirmRequest: bindActionCreators(confirmRequest, dispatch),
    SetDocRequest: bindActionCreators(SetDocRequest, dispatch),
    signInRequest: bindActionCreators(signInRequest, dispatch),
    signOutRequest: bindActionCreators(signOutRequest,dispatch),
    signUpRequest: bindActionCreators(signUpRequest, dispatch),
    uploadDoc: bindActionCreators(createNewDoc, dispatch),
    updateDoc: bindActionCreators(updateDoc,dispatch),
    toastOff: bindActionCreators(ToastActions.toastOff, dispatch),
    requestCurrentUser: bindActionCreators(requestCurrentUser, dispatch),
    queryDocs: bindActionCreators(queryDocs, dispatch)
  }
}
class App extends Component {
  componentDidMount() {
    if(!this.props.auth.isSignIn) {
      this.props.requestCurrentUser();
    }
  }
  render() {
    return (
      <div
        className='app-container'
      >
        <SideBar
          isSignIn={this.props.auth.isSignIn} 
          signOutRequest={this.props.signOutRequest}
        />
        <div
          className='app-container_content'
        >
          <ToastContainer />
          <Switch>
            <Route
              path="/"
              exact
              component={Home}
            />
            <Route 
              path='/doc/:id'
              component={EditorContainer}
            />
            <Route 
              path='/doclist'
              children={() => 
                this.props.auth.isSignIn 
                ? <DocsContainer
                  DocList={this.props.docList}
                  isSignIn={this.props.auth.isSignIn}
                  setDoc={this.props.SetDocRequest}
                  uploadDoc={this.props.uploadDoc}
                  queryDocs={this.props.queryDocs}
                />
                : <Modal
                    isModalOn={!this.props.isSignIn}
                    YesPath="/auth/signin"
                    NoPath="/"
                >
                  {({YesPath, NoPath}) =>
                      <Prompter 
                          YesPath={YesPath}
                          NoPath={NoPath}
                      />
                  }   
                </Modal>
              }
            />
            <Route 
              path='/auth/confirm'
              children={() =>
                this.props.auth.isSignIn 
                ? <Redirect to='/'/>
                : <AsyncConfirm
                    confirmRequest={this.props.confirmRequest}
                />
              }
            />
            <Route 
              path='/auth/:id'
              children={() =>
                this.props.auth.isSignIn 
                ? <Redirect to='/'/>
                : <AsyncAuthentication
                    signInRequest={this.props.signInRequest}
                    signUpRequest={this.props.signUpRequest}
                />
              }
            />
            <Route 
              path='/unauthorization'
              component={UnAuthorization}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));