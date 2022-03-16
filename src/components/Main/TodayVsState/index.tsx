import React from "react";
import * as S from "./style";

type Props = {
    date: string;
    vsCount: number;
};

export default function TodayVsState(props: Props): JSX.Element {
    return (
        <S.Box>
            <span>vs {props.date}</span>
            <span>{props.vsCount}</span>
        </S.Box>
    );
}
