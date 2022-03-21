import React, { useState, useEffect } from "react";
import moment from "moment";
import { Items } from "../../../types/LocationCovidStateType";
import { redHex, redRGB } from "../../../Common";

import * as S from "./style";

export default function LocationState(props: Items): JSX.Element {
    const [locationState, setLocationState] = useState<Items>();

    useEffect(() => {
        let today = moment().format("YYYY년 MM월 DD일");
        today = "2022년 03월 16일";

        let filterLocationState: Items = { item: props.item?.filter((q) => q.stdDay.includes(today) && q.gubun !== "합계")! };
        // console.log(filterLocationState);
        setLocationState(filterLocationState);
    }, []);
    return (
        <div style={{ margin: "0.5rem" }}>
            <S.Table>
                <S.Title>지역</S.Title>
                <S.Title>오늘확진자</S.Title>
                <S.Title>확진자</S.Title>
                <S.Title>사망자</S.Title>
            </S.Table>
            {locationState?.item!.map((state, index) => {
                return (
                    <S.Table key={index}>
                        <S.Box bg={index % 2 === 0 ? "none" : "#F5F5F5"}>
                            <S.Text isLocation={true}>{state.gubun}</S.Text>
                        </S.Box>
                        <S.Box bg={index % 2 === 0 ? "none" : "#F5F5F5"}>
                            <S.Text isLocation={false}>{state.incDec.toLocaleString()}</S.Text>

                            <S.incCount ColorHEX={redHex} colorRGB={redRGB}>
                                {state.incDec.toLocaleString()} ↑
                            </S.incCount>
                        </S.Box>
                        <S.Box bg={index % 2 === 0 ? "none" : "#F5F5F5"}>
                            <S.Text isLocation={false}>{state.defCnt.toLocaleString()}</S.Text>

                            <S.incCount ColorHEX={redHex} colorRGB={redRGB}>
                                {state.incDec.toLocaleString()} ↑
                            </S.incCount>
                        </S.Box>
                        <S.Box bg={index % 2 === 0 ? "none" : "#F5F5F5"}>
                            <S.Text isLocation={false}>{state.deathCnt.toLocaleString()}</S.Text>

                            <S.incCount ColorHEX={redHex} colorRGB={redRGB}>
                                {state.incDec.toLocaleString()} ↑
                            </S.incCount>
                        </S.Box>
                    </S.Table>
                );
            })}
        </div>
    );
}
