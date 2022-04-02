import axios from "axios";
import { key } from "../dev/key";
import { DailyCovidStateType } from "../types/DailyCovidStateType";
let url: string = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?";

export interface Params {
    pageNo: number;
    numOfRows: number;
    startCreateDt: number;
    endCreateDt: number;
}

export function getCovid19InfState(params: Params): Promise<DailyCovidStateType> {
    let requestUrl = url;
    requestUrl += encodeURIComponent("serviceKey") + "=" + key.toString();
    requestUrl += "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent(params.pageNo);
    requestUrl += "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent(params.numOfRows);
    requestUrl += "&" + encodeURIComponent("startCreateDt") + "=" + encodeURIComponent(params.startCreateDt);
    requestUrl += "&" + encodeURIComponent("endCreateDt") + "=" + encodeURIComponent(params.endCreateDt);
    return new Promise<DailyCovidStateType>((resolve, reject) => {
        axios
            .get(requestUrl)
            .then((res) => {
                // console.log("real", res);
                resolve(res.data.response.body);
            })
            .catch((err) => {
                reject(err.response);
            });
        // setTimeout(() => {
        //     resolve(require("../data/DailyCovidStataData.json"));
        // }, 1000);
    });
}

export const GetDailyState = { getCovid19InfState };
