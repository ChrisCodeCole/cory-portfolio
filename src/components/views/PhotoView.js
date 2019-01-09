import React, { Component } from 'react';
import './styles/PhotoView.css';
import { Links, Logo, MenuBars, Menu, SideScroll } from '../common/index';
import { Chapter, FeaturedProj, ImageContainer, Title } from '../photo_components/index';


export default class PhotoView extends Component {
  render() {
    return (
      <div className="PhotoView-container">
          <Logo /> 
          <Chapter /> 
          <FeaturedProj />
          <ImageContainer />
          <SideScroll />
          <Title />
          {/* <Links /> */}
          <Menu />
          <MenuBars />
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
  <PhotoView />
</div> */

