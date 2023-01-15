import React from 'react'
import Card from "../row/Card";
import "./style.css"


const Row = ({ arr  ,title}) => {
  


    return (
      <>
   <div className="row-line">
   <h2 className="heading"> {title}
  </h2>
   <div className="rows">
     {arr.map((elm, i) => {
       return <Card key={i} data={elm}  />;
     })}
   </div>
  </div>
  
    
       
      </>
    );
  };
    export default Row