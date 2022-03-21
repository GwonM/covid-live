export interface LocationCovidStateType {
    items?: Items;
    numOfRows?: number;
    pageNo?: number;
    totalCount?: number;
}
export interface Items {
    item?: LocationItem[] | null;
}
export interface LocationItem {
    createDt: string;
    deathCnt: number;
    defCnt: number;
    gubun: string;
    gubunCn: string;
    gubunEn: string;
    incDec: number;
    localOccCnt: number;
    overFlowCnt: number;
    qurRate: string | number;
    seq: number;
    stdDay: string;
    updateDt: string;
}
