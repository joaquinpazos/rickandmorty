import React from 'react';

function Personaje(props){
    return(
        <React.Fragment>
        <div className= 'personaje'>
            <div className="adicional">
            <div className="user-card">
            <img src={props.personaje.image} alt=""/>
            </div>
            </div>
            <h3> {props.personaje.name} </h3>
            <p> <span>Origin: </span>{props.personaje.origin.name} </p>
            <p> <span>Status: </span> {props.personaje.status} </p>
            <p> <span>Species: </span>{props.personaje.species} </p>
        </div>
        </React.Fragment>
    );
}

export default Personaje;