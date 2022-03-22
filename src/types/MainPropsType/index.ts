import { Items } from "../LocationCovidStateType";

export type Props = {
    Main?: MainProps;
};
export type MainProps = {
    TotalCount: TypeOfTotal;
    incDec: TypeOfInc;
    TodayCount: TypeOfToday;
    LocalState: Items;
};

export type TypeOfTotal = {
    decideCnt: number;
    deathCnt: number;
};

export type TypeOfInc = {
    decideCnt: number;
    deathCnt: number;
};

export type TypeOfToday = {
    today: number;
    yesterday: number;
    OneWeekAgo: number;
    TwoWeeksAgo: number;
    ThreeWeeksAgo: number;
};

// export type Items = {
//     item?: LocationItem[] | null;
// };
// export type LocationItem = {
//     createDt: string;
//     deathCnt: number;
//     defCnt: number;
//     gubun: string;
//     gubunCn: string;
//     gubunEn: string;
//     incDec: number;
//     localOccCnt: number;
//     overFlowCnt: number;
//     qurRate: string | number;
//     seq: number;
//     stdDay: string;
//     updateDt: string;
// };
