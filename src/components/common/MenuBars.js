import React, { Component } from 'react'
import './styles/MenuBars.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class MenuBars extends Component {
  render() {
    return (
      <div className="MenuBars-container">
        <FontAwesomeIcon className="MenuBars-menuBars" icon={faBars} />
      </div>
    )
  }
}
