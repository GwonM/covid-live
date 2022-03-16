import React from "react";
import * as S from "./style";
import { redHex, redRGB } from "../../../Common";

type Props = {
    date: string;
    vsCount: number;
};

export default function TodayVsState(props: Props): JSX.Element {
    return (
        <S.Box>
            <S.date style={{ fontSize: "0.5rem" }}>{props.date}</S.date>
            <S.vsCount ColorHEX={redHex} colorRGB={redRGB}>
                {props.vsCount.toLocaleString()} ↑
            </S.vsCount>
        </S.Box>
    );
}
