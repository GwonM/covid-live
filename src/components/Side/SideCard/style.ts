import styled from "styled-components";

type Props = {
    isLogo: boolean;
};
const Card = styled.div<Props>`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 10px;
    margin-bottom: 1.375rem;
    background: ${(props) => (props.isLogo ? "linear-gradient(to right, #fbcac9, #8ca6ce)" : "none")};
    z-index: 99;
    overflow: hidden;
`;

export { Card };
