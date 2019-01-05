import React, { Component } from 'react';
import './styles/ProjectView.css';
import { Links, Logo, MenuBars, Menu } from '../common/index';
import { Chapter, FeaturedProj, ImageContainer, SideScroll, Title } from '../single-project/index';
import AppContext from '../../AppContext';


export default class ProjectView extends Component {
  render() {
    return (
      <div className="ProjectView-container">
        <AppContext.Provider value={{}}>
          <Logo /> 
          <MenuBars />
          <Chapter /> 
          <FeaturedProj />
          <ImageContainer />
          <SideScroll />
          <Title />
          <Menu />
        </AppContext.Provider>
      </div>
    )
  }
}




/* <div className="App">
  {/* <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header> 
  <ProjectView />
</div> */

