import styled from "styled-components";

const Totalitem = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
`;

const TodayItem = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-around;
`;

const TodayLBox = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
`;
const TodayVsLastday = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ErrorMessage = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 0.625rem;
`;

export { Totalitem, TodayItem, TodayLBox, TodayVsLastday, ErrorMessage };
