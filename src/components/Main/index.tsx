import React from "react";
import MainCard from "./MainCard/MainCard";
import TotalInfo from "./TotalInfo";
import TodayVsState from "./TodayVsState";
import { redHex, redRGB, blueHex, blueRGB, grayHex, grayRGB } from "../../Common";
import * as S from "./style";
import { MainProps } from "../../types/MainPropsType";

export default function Main(props: MainProps): JSX.Element {
    return (
        <>
            <MainCard>
                <S.Totalitem>
                    <TotalInfo
                        name="확진자"
                        TotalCount={props.TotalCount.decideCnt}
                        incDec={props.incDec.decideCnt}
                        ColorHEX={redHex}
                        ColorRGB={redRGB}
                    />
                    <TotalInfo
                        name="사망자"
                        TotalCount={props.TotalCount.deathCnt}
                        incDec={props.incDec.deathCnt}
                        ColorHEX={grayHex}
                        ColorRGB={grayRGB}
                    />
                    <TotalInfo name="입원환자" TotalCount={2138} incDec={301} ColorHEX={blueHex} ColorRGB={blueRGB} />
                    <TotalInfo name="위중증자" TotalCount={1244} incDec={48} ColorHEX={grayHex} ColorRGB={grayRGB} />
                </S.Totalitem>
            </MainCard>

            <MainCard>
                <S.TodayItem>
                    <S.TodayLBox>
                        <div style={{ fontSize: "0.9rem", opacity: "0.9", whiteSpace: "nowrap", fontWeight: 700 }}>오늘 확진자</div>
                        <h2>{550397}명</h2>
                    </S.TodayLBox>
                    <S.TodayVsLastday>
                        <TodayVsState date="어제" vsCount={93307} />
                        <TodayVsState date="1주전" vsCount={242358} />
                    </S.TodayVsLastday>
                    <S.TodayVsLastday>
                        <TodayVsState date="2주전" vsCount={362906} />
                        <TodayVsState date="3주전" vsCount={459392} />
                    </S.TodayVsLastday>
                </S.TodayItem>
            </MainCard>
        </>
    );
}
