import React, { Component } from 'react';
import './styles/CardContainer.css';

//helper function to place images in array
function importAll(r) {
    return r.keys().map(r);
  }
export const images = importAll(require.context('../../assets/WeddingPhotos', false, /\.(png|jpe?g|svg)$/));

export default class CardContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            hovered: false
        }
    }

    toggleHoverOn = () => {
        this.setState({ hovered: true })
    }

    toggleHoverOff = () => {
        this.setState({ hovered: false })
    }
  render() {
    console.log("hover", this.state.hovered);
    return (
      <div className="CardContainer-container">
            {
                images.map((image, index) => 
                    <div className="CardContainer-cardContainer">  
                        <div onMouseEnter={this.toggleHoverOn} onMouseLeave={this.toggleHoverOff} className="CardContainer-card">
                            <div className="CardContainer-cardOverlay">
                                <div className="CardContainer-weddingPhoto" style={{ backgroundImage: `url(${image})` }}>
                                    <span className="CardContainer-weddingText">Click to View</span>
                                    <span className="CardContainer-weddingText">Photos &amp; Videos</span>
                                </div>
                                <div className="CardContainer-nameContainer">
                                    <h2 className="CardContainer-couplesNames">Luis &amp; Elizabeth</h2>
                                </div>
                            </div>   
                        </div>
                    </div>
                )
            }
      </div>
    )
  }
}