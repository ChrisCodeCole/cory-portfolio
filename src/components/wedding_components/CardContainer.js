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
            hovered: -1
        }
    }

    toggleHoverOn = (index) => {
        this.setState({ hovered: index })
    }

    toggleHoverOff = () => {
        this.setState({ hovered: -1 })
    }
  render() {
    console.log("hover", this.state.hovered);
    return (
      <div className="CardContainer-container">
            {
                images.map((image, index) => 
                    <div className="CardContainer-cardContainer">  
                        <div className="CardContainer-card"
                            onMouseEnter={(e) => this.toggleHoverOn(index)} 
                            onMouseLeave={(e) => this.toggleHoverOff()}>
                            <div className="CardContainer-weddingPhoto"
                                style={this.state.hovered === index ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${image})`} : {backgroundImage: `url(${image})`}}>
                                {this.state.hovered === index && <span className="CardContainer-weddingText">Click to View</span> }
                                {this.state.hovered === index && <span className="CardContainer-weddingText">Photos &amp; Videos</span> }
                            </div>
                            <div className="CardContainer-nameContainer">
                                <h2 className="CardContainer-couplesNames"
                                    style={this.state.hovered === index ? {color: 'white'} : null }>
                                    Luis &amp; Elizabeth
                                </h2>
                            </div>
                        </div>
                    </div>
                )
            }
      </div>
    )
  }
}