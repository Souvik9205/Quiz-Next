import React, { useState } from "react";

const Auth = ({ onUserSetup }) => {

    const [username, setUsername] = useState('');

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('username submited' , username);
        onUserSetup(username);
    }

    return(
        <div className="container">
            <h1>{`Welcome ${username}, to my Quiz challenge!`}</h1>
            <hr />
            <hr />
            <p>please enter your <span className="name">name</span> to start the quiz</p>
            <form onSubmit={handleSubmit}> 
                <input
                    type="text"
                    value={username}
                    onChange={handleChange}
                    placeholder="Enter your name..."
                    required
                />
                <br />
                <hr />
                <input type="submit" value="let's go" />
                <hr />
            </form>
        </div>
    );
}

export default Auth;