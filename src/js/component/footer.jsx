import React from 'react';

const Footer = (props) => {
    return (
        <div className="text-center bg-secondary p-4">
            Made with love {props.owner}
        </div>
    );
};

export default Footer;