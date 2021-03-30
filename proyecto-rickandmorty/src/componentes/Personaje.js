import React from 'react';

function Personaje(props){
    return(
        <React.Fragment>
        <div className= 'personaje'>
            <h3> {props.personajes.name} </h3>
            <p> {props.personajes.origin.name} </p>
            <p> {props.personajes.status} </p>
            <p> {props.personajes.species} </p>
        </div>
        </React.Fragment>
    );
}

export default Personaje;