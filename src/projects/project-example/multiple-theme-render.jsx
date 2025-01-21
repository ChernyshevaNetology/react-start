import React from 'react';
import { ThemeData } from './theme-data';
import { Theme } from './theme';

export const MultipleThemeRender = () => {
    return (
        <div>
            {
                ThemeData.map((counter) => <Theme title={counter.title} description={counter.description} link={counter.link} image={counter.img}/>)
            }
        </div>
    );
};