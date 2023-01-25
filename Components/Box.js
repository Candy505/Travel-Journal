import React from "react"
import Navbar from "./Navbar"
import Card from "./Card"
import data from "./data"

export default function Box()
{
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                
            />
        )
    })       
    
    return(
        <main>
         {cards}   
        </main>
        
    );
}
