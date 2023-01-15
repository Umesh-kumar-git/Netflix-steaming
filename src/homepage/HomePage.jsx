import React from 'react';
import "./HomePage.css"
import Banner from './banner';

const HomePage = () => {
  return (
    <div className='container'>
        <img src="poster/poster.jpg" alt="Loding..." />
        <div className="banner"> <Banner/></div>
      
    </div>

    
  )
}

export default HomePage