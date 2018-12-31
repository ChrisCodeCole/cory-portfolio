import React, { Component } from 'react'
import './styles/MenuBar.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class MenuBar extends Component {
  render() {
    return (
      <div className="MenuBar-container">
        <FontAwesomeIcon className="MenuBar-menuBars" icon={faBars} />
      </div>
    )
  }
}
