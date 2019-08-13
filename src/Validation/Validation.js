import React from 'react';

const validation = (props) => {
    let message = '';
    if (props.inputLength > 4) {
        message = 'Text long enough! Now click a box to delete the character in it.';
    } else if(props.inputLength > 0 && props.inputLength <= 4) {
        message = 'Text too short! Please add more characters to be able to delete them.';
    } else if (props.inputLength === 0) {
        message = 'Please type something! Minimum number of characters: 4'
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    );

};

export default validation;