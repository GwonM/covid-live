import styled from "styled-components";

type props = {
    ColorHEX: string;
    colorRGB: string;
};

const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    text-align: center;
    gap: 0.625rem; ;
`;

const Name = styled.p`
    font-size: 0.9rem;
    opacity: 0.9;
    white-space: nowrap;
    font-weight: 700;
    color: #464d52;
`;

const TotalCount = styled.p<props>`
    font-size: 0.9rem;
    opacity: 0.9;
    white-space: nowrap;
    font-weight: 700;
    color: ${(props) => props.ColorHEX};
`;

const IncDevWrap = styled.div<props>`
    color: ${(props) => props.ColorHEX};
    opacity: 0.2;
    border-radius: 35px;
`;

const IncDec = styled.p<props>`
    font-size: 0.7rem;
    opacity: 0.9;
    white-space: nowrap;
    font-weight: bold;
    border-radius: 35px;
    width: fit-content;
    padding: 0.35rem;
    margin: 0 auto;

    color: ${(props) => props.ColorHEX};
    background-color: rgba(${(props) => props.colorRGB}, 0.15);
`;

export { Box, Name, TotalCount, IncDec, IncDevWrap };
