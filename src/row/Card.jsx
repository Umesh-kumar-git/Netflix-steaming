import React from 'react'
import "./card.css"

const Card = (props) => {
  


 const  img_url = "https://image.tmdb.org/t/p/w500"
   const {change} = props
   const {poster_path,release_date} = props.data;

  return (
    <div>  <div className="card-section"  > 
      <div className="card-img">
          <img src={`${img_url}/${poster_path}`} alt=""   /> 
      </div>
      <div className="release">{release_date}</div>
     
     
  </div>
     
  </div>
  )
}

export default Card