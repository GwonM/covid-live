import styled from "styled-components";

type Props = {
    isLogo: boolean;
};
const Card = styled.div<Props>`
    display: flex;
    flex-direction: column;
    border: ${(props) => (props.isLogo ? "gray" : " 1px solid rgba(80, 80, 80, 0.2);")};
    border-radius: 10px;
    margin-bottom: 1.375rem;
    background: ${(props) => (props.isLogo ? "linear-gradient(to right, #fbcac9, #8ca6ce)" : "none")};
    z-index: 99;
    overflow: hidden;

    box-shadow: -2px 4px 12px 2px rgba(0, 0, 0, 0.3);
`;

export { Card };
