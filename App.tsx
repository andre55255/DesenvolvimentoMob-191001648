import React from "react";
import Container from "./src/container/container";
import GameScreen from "./src/screens/gameScreen";
import InitializeDatabase from "./src/database";

export default function App() {

    return (
        <Container>
            <InitializeDatabase />
            <GameScreen />
        </Container>
    );
}
