import React from 'react'
import './styles/SideScroll.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons';
// import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';

const SideScroll = () => {
  return (
    <div className="SideScroll-container">
      {/* <FontAwesomeIcon className="SideScroll-circle" icon={farCircle} />
      <FontAwesomeIcon className="SideScroll-circle" icon={farCircle} />
      <FontAwesomeIcon className="SideScroll-circle" icon={farCircle} />
      <FontAwesomeIcon className="SideScroll-circle" icon={farCircle} />
      <FontAwesomeIcon className="SideScroll-circle" icon={fasCircle} /> */}
      <FontAwesomeIcon className="SideScroll-circle" icon={['fas', 'circle']} />
      <FontAwesomeIcon className="SideScroll-circle" icon={['far', 'circle']} />
      <FontAwesomeIcon className="SideScroll-circle" icon={['far', 'circle']} />
      <FontAwesomeIcon className="SideScroll-circle" icon={['far', 'circle']} />
      <FontAwesomeIcon className="SideScroll-circle" icon={['far', 'circle']} />
    </div>
  )
}

export default SideScroll
