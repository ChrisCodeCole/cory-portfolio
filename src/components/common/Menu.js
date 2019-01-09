import React, { Component } from 'react'
import './styles/Menu.css';
import posed from 'react-pose';
import { connectWithStore } from '../../store/AppContext';

// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuContainer = posed.div({
    open: {
      x: '0%',
      opacity: 1,
      transition:{
        x: { ease: 'easeOut', duration: 300 }
      }
        // x: '0%',
        // delayChildren: 200,
        // staggerChildren: 50
    },
    closed: { 
      x: '100%',
      opacity: 0,
      transition:{
        x: { ease: 'easeOut', duration: 300 }
      }
    }
});
  
class MenuUI extends Component {
  render() {
    const { menuOpened } = this.props.state;
    console.log(menuOpened);
    return (
        <MenuContainer className="Menu-container" pose={menuOpened ? 'open' : 'closed' }>
          <div className="Menu-flexContainer">
            <a className="Menu-link" href="www.google.com">About Me</a>
            <a className="Menu-link" href="www.google.com">Weddings</a>
            <a className="Menu-link" href="www.google.com">Artists</a>
            <a className="Menu-link" href="www.google.com">Contact</a>
          </div>
        </MenuContainer>
    )
  }
}

const Menu = connectWithStore(MenuUI);
export default Menu;