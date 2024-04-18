import React, { useEffect, useState } from 'react';
import "../../styles/card.css";

const Card = (props) => {
    const [newState, setNewState] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        setNewState('bg-primary');
    }

    useEffect(() => {
        console.log('Hemos creado una carta')
    }, [newState])

    return (
        <div className={`${newState} card personal-card`}>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" onClick={handleClick} className="btn btn-primary">{props.cta}</a>
            </div>
        </div>)
};

export default Card;