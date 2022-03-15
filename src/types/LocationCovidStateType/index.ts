export interface LocationCovidStateType {
    items: Items;
    numOfRows: string;
    pageNo: string;
    totalCount: string;
}
export interface Items {
    item?: LocationItem[] | null;
}
export interface LocationItem {
    createDt: string;
    deathCnt: string;
    defCnt: string;
    gubun: string;
    gubunCn: string;
    gubunEn: string;
    incDec: string;
    localOccCnt: string;
    overFlowCnt: string;
    qurRate: string;
    seq: string;
    stdDay: string;
    updateDt: string;
}
