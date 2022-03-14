import React, { useState, useEffect } from "react";
import { Get, Params } from "./service/DailyCovidState";
import { DailyCovidStateType } from "./types/DailyCovidStateType";
export default function App(): JSX.Element {
    const [dailyCovidState, setDailyCovidState] = useState<DailyCovidStateType>();
    useEffect(() => {
        let dailyCovidStateParams: Params = {
            pageNo: 1,
            numOfRows: 10,
            startCreateDt: 20200310,
            endCreateDt: 20200315,
        };
        Get.getCovid19InfState(dailyCovidStateParams).then((res) => {
            console.log(res);
            setDailyCovidState(res);
        });
    }, []);

    if (dailyCovidState) {
        return (
            <div>
                <h1>App</h1>
                {dailyCovidState.items?.item?.map((info, index) => {
                    return (
                        <div key={index}>
                            <span>누적 확진률 : {info.accDefRate}</span>
                            <br />
                            <span>누적 의심 검사 수 : {info.accExamCnt}</span>
                            <br />
                            <span>등록일시분초 : {info.createDt}</span>
                            <br />
                            <span>사망자 수 : {info.deathCnt}</span>
                            <br />
                            <span>확진자 수 : {info.decideCnt}</span>
                            <br />
                            <span>게시글번호(감염현황 고유값) : {info.seq}</span>
                            <br />
                            <span>기준일 : {info.stateDt}</span>
                            <br />
                            <span>기준시간 : {info.stateTime}</span>
                            <br />
                            <span>수정일시분초 : {info.updateDt}</span>
                            <br />
                            <hr />
                        </div>
                    );
                })}
                <span>한 페이지 결과 수 : {dailyCovidState.numOfRows}</span>
                <br />
                <span>페이지 번호 : {dailyCovidState.pageNo}</span>
                <br />
                <span>전체 결과 수 : {dailyCovidState.totalCount}</span>
            </div>
        );
    } else {
        return <div>...loading</div>;
    }
}
