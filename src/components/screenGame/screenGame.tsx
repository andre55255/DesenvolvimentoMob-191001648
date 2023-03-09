import React from "react";
import Header from "../header/header";
import ScreenButtons from "../screenButtons/screenButtons";

export default function ScreenGame(): JSX.Element {
    return (
        <>
            <Header title="PALAVRA.IO" />
            <ScreenButtons />
        </>
    );
}