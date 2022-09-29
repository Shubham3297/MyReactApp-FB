import React from 'react';

const Button = (props) => {
    console.log("This is Button component");
    const alertMsg = () => {
        props.incrementHandler("Data comimg from child Class Component.")
    }
    return (
        <div>
            <button type="button" onClick={alertMsg}>{props.name} Position{props.post} </button>
        </div>
    )
}

export default React.memo(Button);