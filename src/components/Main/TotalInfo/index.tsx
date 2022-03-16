import React from "react";
import * as S from "./style";

type Props = {
    name: string;
    TotalCount: number;
    incDec: number;
    ColorHEX: string;
    ColorRGB: string;
};
export default function TotalInfo(props: Props): JSX.Element {
    return (
        <S.Box>
            <S.Name>{props.name}</S.Name>
            <S.TotalCount ColorHEX={props.ColorHEX} colorRGB={props.ColorRGB}>
                {props.TotalCount.toLocaleString()}
            </S.TotalCount>
            <S.IncDec ColorHEX={props.ColorHEX} colorRGB={props.ColorRGB}>
                {props.incDec.toLocaleString()} ↑
            </S.IncDec>
        </S.Box>
    );
}
