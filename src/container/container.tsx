import React from "react";
import ContainerMain from "../components/container/container";

interface AuxProps {
    children: JSX.Element | JSX.Element[];
}

export default function Container({ children }: AuxProps): JSX.Element {
    return (
        <ContainerMain>
            {children}
        </ContainerMain>
    );
}