import React, { Component } from 'react'
import './styles/ImageContainer.css';
import portrait from '../../assets/CoryPictures/spider-verse-miles2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Dynamically adding in images 
const imgStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${portrait})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
};

export default class ImageContainer extends Component {
  constructor(props){
    super()

    this.state = {
      selectedIndex: 0,
      imageList: ["imageOne","imageTwo","imageThree"]
    }
  }

  changeSelectedIndex = (idx) => {
    this.setState({ selectedIndex: idx });
  }

  render() {
    return (
      <div className="ImageContainer-container" style={imgStyle}>
        <h3 className="ImageContainer-selectedIndex">05</h3>
        <div className="ImageContainer-selectorContainer">
          {/* <FontAwesomeIcon className="ImageContainer-circle" icon={['fas', 'circle']} />
          <FontAwesomeIcon className="ImageContainer-circle" icon={['far', 'circle']} />
          <FontAwesomeIcon className="ImageContainer-circle" icon={['far', 'circle']} /> */}
          {this.state.imageList.map((item, idx) => {
              return(
                this.state.selectedIndex === idx ? 
                  <FontAwesomeIcon key={idx} className="ImageContainer-circle" icon={['fas', 'circle']} onClick={(e) => this.changeSelectedIndex(idx)}/>
                  :
                  <FontAwesomeIcon key={idx} className="ImageContainer-circle" icon={['far', 'circle']} onClick={(e) => this.changeSelectedIndex(idx)}/>
              )
          })
        }
        </div>
        {/* <div className="ImageContainer-img" style={{imgStyle}}></div> */}
        {/* <img src={require("../../assets/CoryPictures/portaitOne.jpg")} alt="photo one" style={{ height: '100%', width: '100%' }}/> */}
      </div>
    )
  }
}
