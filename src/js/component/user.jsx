import React, { useState } from 'react';

const User = (props) => {
    const [name, setName] = useState('');
    const [active1, setActive1] = useState('');
    const [active2, setActive2] = useState('');
    const [active3, setActive3] = useState('');

    return (
        <div className={`border border-primary`}>
            <div className='row'>
                <div className={`${active1} col-4 border border-secondary text-center p-2`} onClick={() => setActive1('active')}>
                    Entidad 1
                </div>
                <div className={`${active2} col-4 border border-secondary text-center p-2`} onClick={() => setActive2('active')}>
                    Entidad 2
                </div>
                <div className={`${active3} col-4 border border-secondary text-center p-2`} onClick={() => setActive3('active')}>
                    Entidad 3
                </div>
            </div>
        </div>
    )
};

export default User;