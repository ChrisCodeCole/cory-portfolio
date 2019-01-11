import React, { Component } from 'react'
import './styles/FeaturedProj.css';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class FeaturedProj extends Component {
  render() {
    return (
      <div className="FeaturedProj-container">
        {/* <div className="FeaturedProj-featuredContainer">
          <h3 className="FeaturedProj-featuredTitle">Featured</h3>
          <p className="FeaturedProj-featuredDesc">Grabbed our attention with another superb photo</p>
        </div>
        <div className="FeaturedProj-projectsContainer">
          <h3 className="FeaturedProj-projectsTitle">Projects</h3>
          <p className="FeaturedProj-projectsDesc">Collaborative project with fellow photographer</p>
        </div>
        <div className="FeaturedProj-playContainer">
          <FontAwesomeIcon className="FeaturedProj-playIcon" icon={faPlayCircle} />
        </div> */}
        <h1 className="FeaturedProj-videosText" >Videos</h1>
        <i className="FeaturedProj-arrowDown"></i>
      </div>
    )
  }
}

// /* .FeaturedProj-featuredContainer {
//     width: 40%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     background-color: rgb(40, 33, 85);
//     padding-left: 3rem;
// }

// .FeaturedProj-featuredTitle {
//     padding-bottom: 1rem;
//     /* padding-left: 5rem; */
//   }

//   .FeaturedProj-featuredDesc {
//       /* padding-left: 5rem; */
//   }
  
//   .FeaturedProj-projectsContainer {
//       width: 40%;
//       height: 100%;
//       display: flex;
//       background-color: rgb(40, 33, 85);
//       flex-direction: column;
//       justify-content: center;
//       padding-left: 3rem;
//   }
  
//   .FeaturedProj-projectsTitle {
//       padding-bottom: 1rem;
//       /* padding-left: 5rem; */
//   }
  
//   .FeaturedProj-projectsDesc {
//       /* padding-left: 5rem; */
//   }
  
//   .FeaturedProj-playContainer {
//       width: 20%;
//       height: 100%;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       background-color: rgb(255, 255, 255);
//   }
  
//   .FeaturedProj-playIcon {
//       color: rgb(40, 40, 40);
//       font-size: 6rem;
//   } */