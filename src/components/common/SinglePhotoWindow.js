import React, { Component } from 'react'
import './styles/SinglePhotoWindow.css';
import posed from 'react-pose';
import { connectWithStore } from '../../store/AppContext';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const MenuContainer = posed.div({
//     open: {
//       x: '0%',
//       opacity: 1,
//       transition:{
//         x: { ease: 'easeOut', duration: 300 }
//       }
//         // x: '0%',
//         // delayChildren: 200,
//         // staggerChildren: 50
//     },
//     closed: { 
//       x: '100%',
//       opacity: 0,
//       transition:{
//         x: { ease: 'easeOut', duration: 300 }
//       }
//     }
// });
  
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
                Content
                <FontAwesomeIcon onClick={() => console.log("left")} className="SinglePhotoWindow-arrowLeft" icon={faLongArrowAltLeft} />
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