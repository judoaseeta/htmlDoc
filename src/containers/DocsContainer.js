import React from 'react';
import RenderProps from '../components/RenderProps';
import DocList from '../components/DocList';
import Modal from './Modal';
import NewDoc from '../components/NewDoc';
import Prompter from '../components/Prompter';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { ListTypeData } from '../components/__test__/DocList.data';
import '../styles/DocsContainer.scss';
export class DocsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.NewDocSwitcher = this.NewDocSwitcher.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    state = {
        isNewDocOn: false,
        title: ''
    };
    componentDidMount() {
        this.props.queryDocs();
    }
    render() {
        // const { DocList } =  this.props;
        return (
            <div
                className="docsContainer"
            >
                <Modal
                    isModalOn={this.state.isNewDocOn}
                    ModalSwitcher={this.NewDocSwitcher}
                    title={this.state.title}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                >
                    {({onChange, onSubmit, title}) =>
                        <NewDoc
                            title={title}
                            onChange={onChange}
                            onSubmit={onSubmit}
                        />
                    }
                </Modal>
                <RenderProps 
                    Docs={this.props.DocList}
                    isNewDocOn={this.state.isNewDocOn}
                    isSignIn={this.props.isSignIn}
                    setDoc={this.props.setDoc}
                    NewDocSwitcher={this.NewDocSwitcher}
                >
                    {({Docs, isNewDocOn , isSignIn, NewDocSwitcher, setDoc}) =>{
                        if(!isSignIn) {
                            return null;
                        }
                        return <DocList 
                                    Docs={Docs}
                                    isNewDocOn={isNewDocOn}
                                    newDocOpen={NewDocSwitcher}
                                    setDoc={setDoc}
                        />
                    }
                }   
                </RenderProps>
            </div>
        )
    }
    NewDocSwitcher(e) {
        this.setState({
            isNewDocOn: !this.state.isNewDocOn,
            title: ''
        });
    }
    onChange(e) {
        this.setState({
            title: e.target.value
        });
    };
    onSubmit(e) {
        e.preventDefault();
        if(this.state.title.length > 3) {
            this.props.uploadDoc(this.state.title);
        }
    }
}
DocsContainer.propTypes = {
    DocList: PropTypes.instanceOf(List),
    isSignIn: PropTypes.bool.isRequired, 
    setDoc: PropTypes.func.isRequired,
    uploadDoc: PropTypes.func.isRequired,
    queryDocs: PropTypes.func.isRequired
}
export default DocsContainer;