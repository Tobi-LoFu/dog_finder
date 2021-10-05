import React from 'react';
import { useParams } from 'react-router-dom';
import { dogs } from '../data.js'

export default function Dogs() {

    const {id} = useParams();
    console.log(typeof dogs[0].id);
    console.log(typeof id);
    
    let infoDogs = dogs.filter((dog)=> dog.id.toString() === id)[0]

    console.log(infoDogs);
    return (
        <div>
            <h2>{infoDogs.name}</h2>
            <p>Age: {infoDogs.age}</p>
            {infoDogs.facts.map((elem, i)=>{
               return <p key={i}>{elem}</p>
            })
            }
        </div>
    )
}
