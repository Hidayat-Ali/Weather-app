import React from "react";


const Weather = (props)=>{


    return(
      <div className="container">
        <div className="cards">
       <h1>{props.city} ,{props.country}</h1>
       <h5 className="py-4">
      <i className={ `wi ${props.icon} display-1`}></i>
       </h5>
       <h1 className="py-2">{props.feels_like}&deg;</h1>
       {/* show min and max temperatures */}
       {minmax(props.temp_max,props.temp_min)}
   
       <p className="discription h3"> {props.description}</p>
        </div>
      </div>
    );
}

function minmax(min,max){
   
return(
  <>

    <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
  
    </h3>
    
    </>
);

}
export default Weather;