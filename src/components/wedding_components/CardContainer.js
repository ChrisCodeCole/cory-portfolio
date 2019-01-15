import React, { Component } from 'react';
import './styles/CardContainer.css';

//helper function to place images in array
function importAll(r) {
    return r.keys().map(r);
  }
export const images = importAll(require.context('../../assets/WeddingPhotos', false, /\.(png|jpe?g|svg)$/));

export default class CardContainer extends Component {
  render() {
    console.log("image", images);
    return (
      <div className="CardContainer-container">
            {
                images.map((image, index) => 
                    <div className="CardContainer-cardContainer">  
                        <div className="CardContainer-card">
                            <div className="CardContainer-weddingPhoto" style={{ backgroundImage: `url(${image})` }}>
                                {/* <span>Click to View</span>
                                <span>Photos &amp; Videos</span> */}
                            </div>
                            <div className="CardContainer-nameContainer">
                                <h2 className="CardContainer-couplesNames">Luis &amp; Elizabeth</h2>
                            </div>
                        </div>   
                    </div>
                )
            }
      </div>
    )
  }
}