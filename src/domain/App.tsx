import React, { useState, useEffect } from "react";
import { GetDailyState, Params } from "../service/DailyCovidState";
import { DailyCovidStateType } from "../types/DailyCovidStateType";
import { GetLocationState } from "../service/LocationCovidState";
import { LocationCovidStateType } from "../types/LocationCovidStateType";

import Side from "../components/Side";
import Main from "../components/Main";

import * as S from "./style";
import GlobalStyle from "../GlobalStyle";

export default function App(): JSX.Element {
    const [dailyCovidState, setDailyCovidState] = useState<DailyCovidStateType>();
    const [locationCovidState, setLocationCovidState] = useState<LocationCovidStateType>();
    useEffect(() => {
        let CovidStateParams: Params = {
            pageNo: 1,
            numOfRows: 10,
            startCreateDt: 20200315,
            endCreateDt: 20200315,
        };
        GetDailyState.getCovid19InfState(CovidStateParams).then((res: DailyCovidStateType) => {
            // console.log(res);
            setDailyCovidState(res);
        });

        GetLocationState.getCovid19LocalState(CovidStateParams).then((res: LocationCovidStateType) => {
            // console.log(res);
            setLocationCovidState(res);
        });
    }, []);

    if (locationCovidState) {
        console.log(locationCovidState);
        return (
            <>
                <GlobalStyle />
                <S.Container>
                    <S.LBox>
                        <Side />
                    </S.LBox>
                    <S.RBox>
                        <Main />
                    </S.RBox>
                </S.Container>
            </>
        );
    } else {
        return <div>...loading</div>;
    }
}
