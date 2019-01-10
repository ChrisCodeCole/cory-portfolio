import React, { Component } from 'react'
import './styles/MenuBars.css';
import posed from 'react-pose';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connectWithStore } from '../../store/AppContext';

const BarsContainer = posed.div({
  open: {
    rotateY: 180
  },
  closed: { 
    rotateY: 0
  }
});

class MenuBarsUI extends Component {
  render() {
    const { onUpdateMenuOpened } = this.props;
    const { isMenuOpened } = this.props.state;
    return (
      <BarsContainer className="MenuBars-container" pose={isMenuOpened ? 'open' : 'closed'}>
      {isMenuOpened ? 
              <span onClick={() => onUpdateMenuOpened()} className="MenuBars-menuBars">&#10006;</span>
              : 
              <FontAwesomeIcon onClick={() => onUpdateMenuOpened()} className="MenuBars-menuBars" icon={faBars} />

      }
      </BarsContainer>
    )
  }
}

const MenuBars = connectWithStore(MenuBarsUI);
export default MenuBars;