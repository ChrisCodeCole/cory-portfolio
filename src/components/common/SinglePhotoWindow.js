import React, { Component } from 'react'
import './styles/SinglePhotoWindow.css';
import posed from 'react-pose';
import { connectWithStore } from '../../store/AppContext';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import portrait from '../../assets/CoryPictures/spider-verse-miles3.jpg';

const imgStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${portrait})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
};
  
class SinglePhotoWindowUI extends Component {
  render() {
      const { isPhotoWindowOpened } = this.props.state;
      const { onUpdatePhotoWindowOpened } = this.props;
      console.log(isPhotoWindowOpened);
    return (
        isPhotoWindowOpened ?
        <div
            ref={diveNode => this.diveNode = diveNode} 
            onClick={(e) => {
                if(e.target === this.diveNode)
                    onUpdatePhotoWindowOpened()
            }} 
            className="SinglePhotoWindow-FScontainer">
            <div className="SinglePhotoWindow-container">
                <FontAwesomeIcon onClick={() => console.log("left")} className="SinglePhotoWindow-arrowLeft" icon={faLongArrowAltLeft} />
                <div className="SinglePhotoWindow-imageContainer" style={imgStyle}></div>
                <FontAwesomeIcon onClick={() => console.log("right")} className="SinglePhotoWindow-arrowRight" icon={faLongArrowAltRight} />
            </div>
        </div>
        : 
        null
    )
  }
}

const SinglePhotoWindow = connectWithStore(SinglePhotoWindowUI);
export default SinglePhotoWindow;