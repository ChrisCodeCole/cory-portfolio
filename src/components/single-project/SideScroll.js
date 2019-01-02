import React, { Component } from 'react'
import './styles/SideScroll.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons';
// import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';

export default class SideScroll extends Component {
  constructor(props){
    super()

    this.state = {
      selectedIndex: 0,
      projectList: ["projOne","projTwo","projThree","projFour","projFive",]
    }
  }

  changeSelectedIndex = (idx) => {
    this.setState({ selectedIndex: idx });
  }

  render(){
    return (
      <div className="SideScroll-container">
        {this.state.projectList.map((item, idx) => {
              return(
                this.state.selectedIndex === idx ? 
                  <FontAwesomeIcon className="SideScroll-circle" icon={['fas', 'circle']} onClick={(e) => this.changeSelectedIndex(idx)}/>
                  :
                  <FontAwesomeIcon className="SideScroll-circle" icon={['far', 'circle']} onClick={(e) => this.changeSelectedIndex(idx)}/>
              )
          })
        }
      </div>
    )
  }
}
