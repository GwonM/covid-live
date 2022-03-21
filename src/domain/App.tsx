import React, { useState, useEffect } from "react";
import { GetDailyState, Params } from "../service/DailyCovidState";
import { DailyCovidStateType } from "../types/DailyCovidStateType";
import { GetLocationState } from "../service/LocationCovidState";
import { LocationCovidStateType } from "../types/LocationCovidStateType";
import Side from "../components/Side";
import Main from "../components/Main";

import * as S from "./style";
import GlobalStyle from "../GlobalStyle";
import { MainProps } from "../types/MainPropsType";

export default function App(): JSX.Element {
    const [mainProps, setMainProps] = useState<MainProps>();

    useEffect(() => {
        let CovidStateParams: Params = {
            pageNo: 1,
            numOfRows: 10,
            startCreateDt: 20220315,
            endCreateDt: 20220316,
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
                <S.Container>
                    <S.LBox>
                        <Side />
                    </S.LBox>
                    <S.RBox>
                        <Main Main={mainProps} />
                    </S.RBox>
                </S.Container>
            </>
        );
    } else {
        return <div>...loading</div>;
    }
}
