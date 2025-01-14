import React from 'react';

export const Button = ({ title, disabled, onClick, color}) => {
    return (
        <div>
            <button className={color} disabled={disabled} onClick={onClick}>{title}</button>
        </div>
    );
};
