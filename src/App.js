// React Components
import React, { Component } from 'react';
import SideBar from './components/SideBar';
import EditorContainer from './containers/EditorContainer';
// Styling related
import './styles/App.scss';
// 3rd
import { Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div
        className='app-container'
      >
        <SideBar />
        <div
          className='app-container_content'
        >
        <Route 
          path='/editor'
          component={EditorContainer}
        />
        </div>
      </div>
    );
  }
}

export default App;