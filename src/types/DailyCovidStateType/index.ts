// export type DailyItem = {
//     accDefRate: number;
//     accExamCnt: number;
//     createDt: string;
//     deathCnt: number;
//     decideCnt: number;
//     seq: number;
//     stateDt: number;
//     stateTime: string;
//     updateDt: string;
// };

// export type DailyCovidStateType = {
//     item?: DailyItem[];
//     numOfRows?: number;
//     pageNo?: number;
//     totalCount?: number;
// };

export interface DailyCovidStateType {
    items?: Items;
    numOfRows?: string;
    pageNo?: string;
    totalCount?: string;
}
export interface Items {
    item?: DailyItem[] | null;
}
export interface DailyItem {
    accDefRate: string;
    accExamCnt: string;
    createDt: string;
    deathCnt: string;
    decideCnt: string;
    seq: string;
    stateDt: string;
    stateTime: string;
    updateDt: string;
}
