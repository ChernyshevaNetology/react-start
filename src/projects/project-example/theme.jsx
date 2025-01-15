import React from 'react';

export const Theme = ({name, description, link, image}) => {
    return (
        <div className={'theme'}>
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={link}>Смотреть тему</a>
            <img src={image} />
        </div>
    );
};

