import React, { Component } from 'react'
import './styles/MenuBars.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connectWithStore } from '../../store/AppContext';

class MenuBarsUI extends Component {
  render() {
    const { onUpdateMenuOpened } = this.props;
    return (
      <div className="MenuBars-container">
        <FontAwesomeIcon onClick={() => onUpdateMenuOpened()} className="MenuBars-menuBars" icon={faBars} />
      </div>
    )
  }
}

const MenuBars = connectWithStore(MenuBarsUI);
export default MenuBars;