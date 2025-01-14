import React from 'react';

export const Notice = ({warning}) => {
    return (
        <div>
            <h2>
                {warning}
            </h2>
        </div>
    );
};