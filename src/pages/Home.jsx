import React, { useState } from "react";
import Header from "../components/Header";
import { Button } from "@mui/material";

const Home = ({ modeSet }) => {
    const [mode, setMode] = useState(true);

    function handleClick() {
        setMode(true);
        console.log('mode selected' , mode);
        modeSet(mode);
    };

    return (
        <div className="home-page">
            <Header className="header-page" />
            <hr />
            <h3>`Welcome to this quiz challenge 💫`</h3>
            <h4>Choose the Mode you wanna play:</h4>
            <hr />
            <div className="modes">
                <Button
                    onClick={handleClick}
                    variant="contained"
                    color="success"
                >
                    Random 15!
                </Button>
                <Button
                    onClick={handleClick}
                    variant="contained"
                    color="success"
                >
                    My questions xD
                </Button>
                <hr />
            </div>
        </div>
    )
};

export default Home;