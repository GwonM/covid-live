import React from "react";
import MainCard from "./MainCard/MainCard";
import TotalInfo from "./TotalInfo";
import TodayVsState from "./TodayVsState";
import LocationState from "./LocationState";
import { redHex, redRGB, blueHex, blueRGB, grayHex, grayRGB } from "../../Common";
import * as S from "./style";
import { Props } from "../../types/MainPropsType";

export default function Main(props: Props): JSX.Element {
    if (props.Main) {
        return (
            <>
                <MainCard>
                    <S.Totalitem>
                        <TotalInfo
                            name="확진자"
                            TotalCount={props.Main?.TotalCount.decideCnt!}
                            incDec={props.Main?.incDec.decideCnt!}
                            ColorHEX={redHex}
                            ColorRGB={redRGB}
                        />
                        <TotalInfo
                            name="사망자"
                            TotalCount={props.Main?.TotalCount.deathCnt!}
                            incDec={props.Main?.incDec.deathCnt!}
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
                            <h2>{props.Main?.TodayCount.today.toLocaleString()}명</h2>
                        </S.TodayLBox>
                        <S.TodayVsLastday>
                            <TodayVsState date="어제" vsCount={props.Main?.TodayCount.yesterday!} />
                            <TodayVsState date="1주전" vsCount={props.Main?.TodayCount.OneWeekAgo!} />
                        </S.TodayVsLastday>
                        <S.TodayVsLastday>
                            <TodayVsState date="2주전" vsCount={props.Main?.TodayCount.TwoWeeksAgo!} />
                            <TodayVsState date="3주전" vsCount={props.Main?.TodayCount.ThreeWeeksAgo!} />
                        </S.TodayVsLastday>
                    </S.TodayItem>
                </MainCard>

                <MainCard>
                    <LocationState item={props.Main?.LocalState.item!} />
                </MainCard>
            </>
        );
    } else {
        return (
            <MainCard>
                <S.ErrorMessage>준비중입니다</S.ErrorMessage>
            </MainCard>
        );
    }
}
