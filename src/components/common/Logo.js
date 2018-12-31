import React from 'react'
import './styles/Logo.css';
import logoImg from '../../assets/CoryPictures/logoImg.png';

const imgStyle = {
  // width: '100%',
  // height: 'auto',
  backgroundImage: `url(${logoImg})`,
  backgroundColor: 'rgb(255,255,255)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
};

const Logo = () => {
  return (
    <div className="Logo-container" style={imgStyle}>
    </div>
  )
}

export default Logo
