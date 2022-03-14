import axios, { AxiosResponse } from "axios";
import { key } from "../dev/key";
import { DailyCovidStateType } from "../types/DailyCovidStateType";
let url: string = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?";

export interface Params {
    pageNo: number;
    numOfRows: number;
    startCreateDt: number;
    endCreateDt: number;
}

async function getCovid19InfState(params: Params): Promise<DailyCovidStateType> {
    let requestUrl = url;
    requestUrl += encodeURIComponent("serviceKey") + "=" + key.toString();
    requestUrl += "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent(params.pageNo);
    requestUrl += "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent(params.numOfRows);
    requestUrl += "&" + encodeURIComponent("startCreateDt") + "=" + encodeURIComponent(params.startCreateDt);
    requestUrl += "&" + encodeURIComponent("endCreateDt") + "=" + encodeURIComponent(params.endCreateDt);
    try {
        // return axios.get(requestUrl).then((res: AxiosResponse) => res.data.response.body);
        return require("../data/DailyCovidStataData.json");
    } catch (error) {
        console.log(error);
        let empty: DailyCovidStateType = {};
        return empty;
    }
}

export const Get = { getCovid19InfState };
