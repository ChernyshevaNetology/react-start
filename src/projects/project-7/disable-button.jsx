import React, { useState, useEffect } from 'react';
/*
  Instructions:
    Assume you're creating an app that allows the user to
    post status updates (ala Twitter). Your UI should have a
    textarea and a button. The button should be disabled if the
    length of the textarea is 0 or greater than 240 characters.
    The document's title should inform the user on how many
    characters they have left to type before they hit the 240
    character limit - "115 characters left."
*/
export const DisableButton = () => {
    const [value, setValue] = useState('');

    useEffect(() => {
       document.title = `${240 - value.length} characters left`;


    }, [value])

    const onInput = (e) => setValue(e.target.value);

    console.log('value', value);
    return (
        <div className={'text-area'}>
            <textarea className={'text-input'} onChange={onInput} />
            <button disabled={value.length < 1 || value.length > 100}>submit</button>
        </div>
    );
};
