import axios from "axios";
import { key } from "../dev/key";
import { LocationCovidStateType } from "../types/LocationCovidStateType";
let url: string = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?";

export interface Params {
    pageNo: number;
    numOfRows: number;
    startCreateDt: number;
    endCreateDt: number;
}

export function getCovid19LocalState(params: Params): Promise<LocationCovidStateType> {
    let requestUrl = url;
    requestUrl += encodeURIComponent("serviceKey") + "=" + key.toString();
    requestUrl += "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent(params.pageNo);
    requestUrl += "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent(params.numOfRows);
    requestUrl += "&" + encodeURIComponent("startCreateDt") + "=" + encodeURIComponent(params.startCreateDt);
    requestUrl += "&" + encodeURIComponent("endCreateDt") + "=" + encodeURIComponent(params.endCreateDt);
    return new Promise<LocationCovidStateType>((resolve, reject) => {
        // axios
        //     .get(requestUrl)
        //     .then((res) => {
        //         resolve(res.data.response.body);
        //     })
        //     .catch((err) => {
        //         reject(err.response);
        //     });
        resolve(require("../data/LocationCovidStateData.json"));
    });
}

export const GetLocationState = { getCovid19LocalState };
