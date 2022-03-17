export type DailyCovidStateType = {
    items?: Items;
    numOfRows?: number;
    pageNo?: number;
    totalCount?: number;
};
export type Items = {
    item?: DailyItem[] | null;
};
export type DailyItem = {
    accDefRate: number;
    accExamCnt: number;
    createDt: string;
    deathCnt: number;
    decideCnt: number;
    seq: number;
    stateDt: number;
    stateTime: string;
    updateDt: string;
};
