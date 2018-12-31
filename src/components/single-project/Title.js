import React from 'react'
import './styles/Title.css';

const Title = () => {
  return (
    <div className="Title-container">
      <div className="Title-textContainer">
        <h1 className="Title-mainText">Dope</h1>
        <div className="Title-textDate">
          <span className="Title-year">2018</span>
          <span className="Title-initials">CB.</span>
        </div>
      </div>
    </div>
  )
}

export default Title
