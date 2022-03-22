import styled, { css } from "styled-components";

type props = {
    bg: string;
};

type orderProps = {
    order: string;
};

type textProps = {
    isLocation: boolean;
};

type incProps = {
    ColorHEX: string;
    colorRGB: string;
};

const Table = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 1.5fr 1.5fr 1.5fr;
`;

const Title = styled.div<orderProps>`
    cursor: pointer;
    display: flex;
    margin: 0.4rem;
    padding: 0.5rem 0.5rem 0 0.5rem;
    color: #868686;
    font-size: 0.6875rem;
    font-weight: bold;
    &::after {
        ${(props) =>
            props.order === "ASC" &&
            css`
                content: "↑";
            `}
        ${(props) =>
            props.order === "DESC" &&
            css`
                content: "↓";
            `}
    }
    &:first-child {
        justify-content: center;
    }
`;

const Box = styled.div<props>`
    display: flex;
    align-items: center;
    text-align: left;
    background-color: ${(props) => props.bg};
    padding: 0.6rem 0.5rem;
    margin: 0.4rem;
    border-radius: 0.5rem;

    &:first-child {
        justify-content: center;
    }
`;

const Text = styled.div<textProps>`
    color: #464d52;
    font-size: 0.7rem;
    font-weight: bold;

    ${(props) =>
        props.isLocation
            ? ""
            : css`
                  &::after {
                      content: "명";
                      margin-left: 0.1rem;
                      color: #868686;
                      font-size: 0.4rem;
                      font-weight: bold;
                  }
              `}
`;

const incCount = styled.p<incProps>`
    font-size: 0.48rem;
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

export { Table, Title, Box, Text, incCount };
