import React, { Component } from 'react'
import './styles/SinglePhotoWindow.css';
import posed from 'react-pose';
import { connectWithStore } from '../../store/AppContext';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { images } from '../photo_components/ImageContainer';

  
class SinglePhotoWindowUI extends Component {
    constructor(props){
    super(props);
        this.state = {
            focused: false,
        }
        this.divNode = React.createRef();
    }

    componentDidMount(){
        this.divNode.current.focus();
    }

    handleKeyPress = (e) => {
        const { imageIndex } = this.props.state;
        const { onChangeImageIndex } = this.props;
        if(e.keyCode === 37){
            const imgContainer = e.target.querySelector(".SinglePhotoWindow-imageContainer");
            imgContainer.classList.remove("fade");
            console.log("img class list remove", imgContainer.classList);
            onChangeImageIndex(images.length - 1, imageIndex - 1)
            imgContainer.classList.add("fade");
            console.log("img class list", imgContainer.classList);
        }
        if(e.keyCode == 39)
            onChangeImageIndex(images.length - 1, imageIndex + 1)
    }  

    render() {
        const { isPhotoWindowOpened, imageIndex } = this.props.state;
        const { onUpdatePhotoWindowOpened, onChangeImageIndex } = this.props;
        return (
            isPhotoWindowOpened ?
            <div
                className="SinglePhotoWindow-FScontainer"
                onKeyDown={(e) => this.handleKeyPress(e)}
                ref={this.divNode} 
                onClick={(e) => {
                    if(e.target === this.divNode.current)
                        onUpdatePhotoWindowOpened()
                }} 
                tabIndex={"0"}
                autoFocus
                >
                <div className="SinglePhotoWindow-container">
                    <FontAwesomeIcon 
                        onClick={() => onChangeImageIndex(images.length - 1, imageIndex - 1)}
                        className="SinglePhotoWindow-arrowLeft" 
                        icon={faLongArrowAltLeft} 
                        />
                    <div className="SinglePhotoWindow-imageContainer" style={{ backgroundImage: `url(${images[imageIndex]})`}}></div>
                    <FontAwesomeIcon 
                        onClick={() => onChangeImageIndex(images.length - 1, imageIndex + 1)} 
                        className="SinglePhotoWindow-arrowRight" 
                        icon={faLongArrowAltRight} 
                        />
                </div>
            </div>
            : 
            null
        )
  }
}

const SinglePhotoWindow = connectWithStore(SinglePhotoWindowUI);
export default SinglePhotoWindow;