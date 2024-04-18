import React, { useEffect, useState } from 'react';

const Modal = (props) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => {
            console.log('Estoy desmontando el componente y restaurando el estado')
            clearInterval(interval)
        };
    }, []);

    return (
        <div className="modal" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{time}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.onCloseModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;