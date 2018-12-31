import React from 'react'
import './styles/Links.css';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Links = () => {
  return (
    <div className="Links-container">
      <h3 className="Links-shareText">SHARE</h3>
      <FontAwesomeIcon className="Links-shareAltIcon" icon={faShareAlt} />
    </div>
  )
}

export default Links
