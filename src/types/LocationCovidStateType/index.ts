export type LocationCovidStateType = {
    items?: Items;
    numOfRows?: number;
    pageNo?: number;
    totalCount?: number;
};
export type Items = {
    item?: LocationItem[] | null;
};
export type LocationItem = {
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
};
