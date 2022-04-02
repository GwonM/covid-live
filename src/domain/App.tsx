import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import moment from "moment";

import { GetDailyState, Params } from "../service/DailyCovidState";
import { DailyCovidStateType } from "../types/DailyCovidStateType";
import { GetLocationState } from "../service/LocationCovidState";
import { LocationCovidStateType } from "../types/LocationCovidStateType";
import Side from "../components/Side";
import Main from "../components/Main";
import MainCard from "../components/Main/MainCard/MainCard";
import { ErrorMessage } from "../components/Main/style";

import * as S from "./style";
import GlobalStyle from "../GlobalStyle";
import { MainProps } from "../types/MainPropsType";

export default function App(): JSX.Element {
    const [mainProps, setMainProps] = useState<MainProps>();

    useEffect(() => {
        let CovidStateParams: Params = {
            pageNo: 1,
            numOfRows: 10,
            startCreateDt: parseInt(moment().subtract(2, "d").format("YYYYMMDD")),
            endCreateDt: parseInt(moment().subtract(1, "d").format("YYYYMMDD")),
        };
        let dailyCovidState: DailyCovidStateType;
        let locationCovidState: LocationCovidStateType;

        async function getData() {
            dailyCovidState = await GetDailyState.getCovid19InfState(CovidStateParams);
            locationCovidState = await GetLocationState.getCovid19LocalState(CovidStateParams);
        }
        getData().then(() => {
            setMainProps({
                TotalCount: {
                    deathCnt: dailyCovidState?.items?.item![0].deathCnt!,
                    decideCnt: dailyCovidState?.items?.item![0].decideCnt!,
                },
                incDec: {
                    deathCnt: dailyCovidState?.items?.item![0].deathCnt! - dailyCovidState?.items?.item![1].deathCnt!,
                    decideCnt: locationCovidState?.items?.item!.find((q) => q.gubun === "합계")!.incDec!,
                },
                TodayCount: {
                    today: locationCovidState?.items?.item!.find((q) => q.gubun === "합계")!.incDec!,
                    yesterday: 0,
                    OneWeekAgo: 0,
                    TwoWeeksAgo: 0,
                    ThreeWeeksAgo: 0,
                },
                LocalState: {
                    item: locationCovidState.items?.item!,
                },
            });
        });
    }, []);

    if (mainProps) {
        return (
            <>
                <GlobalStyle />
                <BrowserRouter>
                    <S.Container>
                        <S.LBox>
                            <Side />
                        </S.LBox>
                        <S.RBox>
                            <Routes>
                                <Route path="/" element={<Main Main={mainProps} />} />
                                <Route path="/world" element={<Main />} />
                                <Route path="/vaccine" element={<Main />} />
                                <Route
                                    path="*"
                                    element={
                                        <MainCard>
                                            <ErrorMessage>NotFound</ErrorMessage>
                                        </MainCard>
                                    }
                                />
                            </Routes>
                        </S.RBox>
                    </S.Container>
                </BrowserRouter>
            </>
        );
    } else {
        return <div>...loading</div>;
    }
}
