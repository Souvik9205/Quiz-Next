import React, { useState } from "react";
import Home from "./pages/Home";
import { Container } from "@mui/material";
import Auth from "./components/Auth";
import Quiz from "./pages/Quiz";

const App = () => {
    const [user, setUser] = useState('');
    const [modal, setModal] = useState(false);
    const [scores, setScores] = useState(0);

    const handleUserChange = (username) => {
        setUser(username);
    };
    const handleMode = (mode) => {
        setModal(mode);
    };
    const handlePoints = (score) => {
        setScores(score);
    }

    return (
        <div className="app">
            <Container>
                {user ? (
                    modal === true ? (
                        <Quiz setPoints={handlePoints}/>
                    ) : (
                        <Home modeSet={handleMode} />
                    )
                ) : (
                    <Auth onUserSetup={handleUserChange} />
                )}
            </Container>
        </div>
    );
}

export default App;