import React from 'react';

const Jumbotron = (props) => {
    return (
        <div className="jumbotron bg-secondary">
            <h1 className="display-4">{props.titulo}</h1>
            <p className="lead">{props.descripcion}</p>
            <hr className="my-4" />
            <a className="btn btn-primary btn-lg" href="#" role="button">{props.textoBoton}</a>
        </div>
    )
};

export default Jumbotron;