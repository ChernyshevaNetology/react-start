import React from 'react';

export const Theme = ({title, description, link, image}) => {
    return (
        <div className={'theme'}>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link}>Смотреть тему</a>
            <img src={image} />
        </div>
    );
};

