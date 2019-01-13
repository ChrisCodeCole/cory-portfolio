import React, { Component } from 'react';
import './styles/PhotoView.css';
import { Links, Logo, MenuBars, Menu, SideScroll, SinglePhotoWindow } from '../common/index';
import { Chapter, FeaturedProj, ImageContainer, Title } from '../photo_components/index';
import { connectWithStore } from '../../store/AppContext';

class PhotoViewUI extends Component {
  render() {
    const { isPhotoWindowOpened } = this.props.state;
    return (
      <div className="PhotoView-container">
          {
            isPhotoWindowOpened ?
              <SinglePhotoWindow />
              :
              null
          }
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

const PhotoView = connectWithStore(PhotoViewUI);
export default PhotoView;


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

