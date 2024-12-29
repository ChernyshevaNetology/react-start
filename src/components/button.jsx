import React from 'react';

export const Button = ({ title, onClick, color}) => {
    return (
        <div>
            <button className={color} onClick={onClick}>{title}</button>
        </div>
    );
};
