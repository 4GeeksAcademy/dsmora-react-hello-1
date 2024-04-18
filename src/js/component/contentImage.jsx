import React from 'react';

const ContentImage = (props) => {

    return (
        <div className='col-4 p-2 border border-primary'>
            <img style={{ height: '250px', width: '100%' }} className="object-fit-cover img-fluid" src={props.srcImage} />
            <div className='d-flex justify-content-between mt-2'>
                <button onClick={props.handleDuplicatedImage}>
                    Duplicar
                </button>
                <button onClick={props.handleDeleteImage}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default ContentImage;