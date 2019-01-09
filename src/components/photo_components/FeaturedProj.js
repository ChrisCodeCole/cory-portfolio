import React, { Component } from 'react'
import './styles/FeaturedProj.css';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class FeaturedProj extends Component {
  render() {
    return (
      <div className="FeaturedProj-container">
        <div className="FeaturedProj-featuredContainer">
          <h3 className="FeaturedProj-featuredTitle">Featured</h3>
          <p className="FeaturedProj-featuredDesc">Grabbed our attention with another superb photo</p>
        </div>
        <div className="FeaturedProj-projectsContainer">
          <h3 className="FeaturedProj-projectsTitle">Projects</h3>
          <p className="FeaturedProj-projectsDesc">Collaborative project with fellow photographer</p>
        </div>
        <div className="FeaturedProj-playContainer">
          <FontAwesomeIcon className="FeaturedProj-playIcon" icon={faPlayCircle} />
        </div>
      </div>
    )
  }
}
