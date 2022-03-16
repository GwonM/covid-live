import styled from "styled-components";

type props = {
    ColorHEX: string;
    colorRGB: string;
};

const Box = styled.div`
    display: flex;
    gap: 0.6rem;
    align-items: center;
`;

const date = styled.div`
    &::before {
        content: "vs";
        margin-right: 0.25rem;
    }
    font-weight: 700;
    font-size: 0.75rem;
    min-width: 2.5rem;
    max-width: 2.5rem;
`;

const vsCount = styled.p<props>`
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

export { Box, date, vsCount };
