import React from 'react'
import './CubeComponent.css';


const CubeComponent = () => {
  return (
    <div className="cube-container  scroll-smooth ">
      <div className="cube ">
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
      </div>
    </div>
  )
}
export default CubeComponent;