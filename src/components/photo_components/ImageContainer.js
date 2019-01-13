import React, { Component } from 'react'
import './styles/ImageContainer.css';
import { connectWithStore } from '../../store/AppContext';

//helper function to place images in array
function importAll(r) {
  return r.keys().map(r);
}
export const images = importAll(require.context('../../assets/CoryPictures', false, /\.(png|jpe?g|svg)$/));

class ImageContainerUI extends Component {
  constructor(props){
    super()

    this.state = {
      selectedIndex: 0,
    }
  }

  changeSelectedIndex = (idx) => {
    this.setState({ selectedIndex: idx });
  }

render() {
    const { isPhotoWindowOpened } = this.props.state;
    const { onUpdatePhotoWindowOpened } = this.props;
    return (
      <div className="ImageContainer-container" >
        {
          images.map((image, index) => {
            return(
              <div onClick={(e) => onUpdatePhotoWindowOpened(index)} key={index} className="ImageContainer-imageWrapper" style={{ backgroundImage: `url(${image})` }}>

              </div>
            )}
          )
        }
      </div>
    )
  }
}

const ImageContainer = connectWithStore(ImageContainerUI);
export default ImageContainer;