import React from 'react';

var Greet = (props) => {

    var demo = (data) => {
        window.alert(data);
    }

    return (<div>

        <h3>Hello , Friends, This is {props.name}</h3>
        <p>Your post is {props.post}</p>
        <button type="button" onClick={() => demo("Hi, This is Parameterize Function.")}>Click On Me</button>
    </div>)

}

export default Greet;