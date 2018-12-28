import React, { Component } from 'react'
import './styles/ImageContainer.css';
import portrait from '../../assets/CoryPictures/portaitOne.jpg';

// Dynamically adding in images 
const imgStyle = {
    width: '100%',
    backgroundImage: `url(${portrait})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
};

export default class ImageContainer extends Component {

  render() {
    return (
      <div className="ImageContainer-container" style={imgStyle}>
        {/* <div className="ImageContainer-img" style={{imgStyle}}></div> */}
        {/* <img src={require("../../assets/CoryPictures/portaitOne.jpg")} alt="photo one" style={{ height: '100%', width: '100%' }}/> */}
      </div>
    )
  }
}
