import { GameButtonAnswers } from "./gameButtonAnswer";

export interface buttonProps {
    text: string;
    colorText: string;
    fontSizeText: number;
    backColorBtn: string;
    onPressEvt?: Function;
    gameData?: GameButtonAnswers;
}
