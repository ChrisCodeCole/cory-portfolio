import React, { Component } from 'react'
import './styles/Menu.css';
import posed from 'react-pose';
import { connectWithStore } from '../../store/AppContext';

// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuContainer = posed.div({
    open: {
      x: '0%',
      transition:{
        x: { ease: 'easeOut', duration: 300 }
      }
        // x: '0%',
        // delayChildren: 200,
        // staggerChildren: 50
    },
    closed: { 
      x: '100%',
      transition:{
        x: { ease: 'easeOut', duration: 300 }
      }
    }
});
// const Sidebar = posed.ul({
//     open: {
//       x: '0%',
//       delayChildren: 200,
//       staggerChildren: 50
//     },
//     closed: { x: '-100%', delay: 300 }
//   });
  
//   const Item = posed.li({
//     open: { y: 0, opacity: 1 },
//     closed: { y: 20, opacity: 0 }
//   });
  
//   class Example extends React.PureComponent {
//     state = { isOpen: false };
  
//     componentDidMount() {
//       setTimeout(this.toggle, 1000);
//     }
  
//     toggle = () => this.setState({ isOpen: !this.state.isOpen });
  
//     render() {
//       const { isOpen } = this.state;
  
//       return (
//         <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
//           <Item className="item" />
//           <Item className="item" />
//           <Item className="item" />
//           <Item className="item" />
//         </Sidebar>
//       );
//     }
//   }
  
class MenuUI extends Component {
  render() {
    const { menuOpened } = this.props.state;
    console.log(menuOpened);
    return (
      // <div className="Menu-container">
        <MenuContainer className="Menu-container" pose={menuOpened ? 'open' : 'closed' }>
          <div className="Menu-flexContainer">
            <h1>Weddings</h1>
            <h1>Artists</h1>
            <h1>Contact</h1>
            <h1>Contact</h1>
          </div>
        </MenuContainer>
      // </div> 
    )
  }
}

const Menu = connectWithStore(MenuUI);
export default Menu;