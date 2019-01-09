import React, { Component } from 'react'
import './styles/MenuBars.css';
import posed from 'react-pose';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connectWithStore } from '../../store/AppContext';

const BarsContainer = posed.div({
  open: {
    rotate: 90
  },
  closed: { 
    rotate: 0
  }
});

class MenuBarsUI extends Component {
  render() {
    const { onUpdateMenuOpened } = this.props;
    const { menuOpened } = this.props.state;
    return (
      <BarsContainer className="MenuBars-container" pose={menuOpened ? 'open' : 'closed'}>
        <FontAwesomeIcon onClick={() => onUpdateMenuOpened()} className="MenuBars-menuBars" icon={faBars} />
      </BarsContainer>
    )
  }
}

const MenuBars = connectWithStore(MenuBarsUI);
export default MenuBars;