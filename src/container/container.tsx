import React from "react";
import ContainerMain from "../components/container/container";
import ScreenGame from "../components/screenGame/screenGame";

export default function Container(): JSX.Element {
    return (
        <ContainerMain>
            <ScreenGame />
        </ContainerMain>
    );
}