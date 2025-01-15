import React from 'react';

export const Button = ({color, title, blocked, handler}) => {
    return (
        <div>
            <button className={color} disabled={blocked} onClick={handler}>{title}</button>
        </div>
    );
};
