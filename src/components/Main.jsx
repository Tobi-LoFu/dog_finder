import React from 'react';
import { Link } from 'react-router-dom';
import { dogs } from '../data.js'

export default function Main() {
    return (
        <div >
            <Link to="/dogs">
                <h2>Welcome to my Cats - I rather like cats than dogs!</h2>
                </Link>

            <div className="container">
                {dogs.map((dog, i)=>{
                    console.log(i);
                    return (
                       <>
                          <Link to={`/dogs/${dog.name}/${dog.id}`} key={i}>
                             <img src={dog.image} alt={dog.name} />
                             <p>{dog.name}</p>
                          </Link>
                       </>
                    );
                })}
            </div>
        </div>
    )
}
