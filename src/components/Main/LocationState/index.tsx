import React, { useState, useEffect } from "react";
import moment from "moment";
import { Items } from "../../../types/LocationCovidStateType";
import { redHex, redRGB } from "../../../Common";

import * as S from "./style";

type order = {
    [key: string]: string;
};

export default function LocationState(props: Items): JSX.Element {
    const [locationState, setLocationState] = useState<Items>();
    const [stateOrder, setStateOrder] = useState<order>({
        오늘확진자: "ASC",
        확진자: "NONE",
        사망자: "NONE",
    });

    const Sort = (orderType: string) => {
        if (orderType === "오늘확진자") {
            setStateOrder({ 지역: "NONE", 오늘확진자: stateOrder["오늘확진자"] === "ASC" ? "DESC" : "ASC", 확진자: "NONE", 사망자: "NONE" });

            if (stateOrder["오늘확진자"] === "ASC") setLocationState({ item: locationState?.item!.sort((a, b) => a.incDec - b.incDec) });
            else setLocationState({ item: locationState?.item!.sort((a, b) => b.incDec - a.incDec) });
        } else if (orderType === "확진자") {
            setStateOrder({ 지역: "NONE", 오늘확진자: "NONE", 확진자: stateOrder["확진자"] === "ASC" ? "DESC" : "ASC", 사망자: "NONE" });

            if (stateOrder["확진자"] === "ASC") setLocationState({ item: locationState?.item!.sort((a, b) => a.defCnt - b.defCnt) });
            else setLocationState({ item: locationState?.item!.sort((a, b) => b.defCnt - a.defCnt) });
        } else if (orderType === "사망자") {
            setStateOrder({ 지역: "NONE", 오늘확진자: "NONE", 확진자: "NONE", 사망자: stateOrder["사망자"] === "ASC" ? "DESC" : "ASC" });

            if (stateOrder["사망자"] === "ASC") setLocationState({ item: locationState?.item!.sort((a, b) => a.deathCnt - b.deathCnt) });
            else setLocationState({ item: locationState?.item!.sort((a, b) => b.deathCnt - a.deathCnt) });
        }
    };

    useEffect(() => {
        let today = moment().subtract(1, "d").format("YYYY년 MM월 DD일");

        let filterLocationState: Items = {
            item: props.item?.filter((q) => q.stdDay.includes(today) && q.gubun !== "합계").sort((a, b) => b.incDec - a.incDec),
        };
        setLocationState(filterLocationState);
    }, []);

    return (
        <div style={{ margin: "0.5rem" }}>
            <S.Table>
                <S.Title order={"NONE"} onClick={() => Sort("지역")}>
                    지역
                </S.Title>
                <S.Title order={stateOrder["오늘확진자"]} onClick={() => Sort("오늘확진자")}>
                    오늘확진자
                </S.Title>
                <S.Title order={stateOrder["확진자"]} onClick={() => Sort("확진자")}>
                    확진자
                </S.Title>
                <S.Title order={stateOrder["사망자"]} onClick={() => Sort("사망자")}>
                    사망자
                </S.Title>
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
