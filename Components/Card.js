import React from "react"


export default function Card(props)
{
    return(
        <section>
        
        <div> 
        <img className="place-img" src = {props.item.imageUrl}></img>
        </div>
        
        <div className="block">
        
        <div className = "bar">
        <img id = "loc-pointer" src = "https://img.icons8.com/color/512/place-marker.png"></img>
        <h5 id = "name">{props.item.location}</h5>
        <a href = "{props.item.googleMapsUrl}">View on google Maps</a>
        
         </div>
         
        <div className ="info">
        <h2 id ="head">{props.item.title}</h2>
        <h4>{props.item.startDate} - {props.item.endDate} </h4>
        <p className="about-place">{props.item.description}</p>
        </div>
        </div>
        </section>
    );
}