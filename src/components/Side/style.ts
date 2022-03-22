import styled from "styled-components";
import { Link } from "react-router-dom";

type props = {
    $isActive: boolean;
};

const Logo = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    font-size: 22px;
    font-weight: 800;
`;

const ListItem = styled(Link)<props>`
    display: flex;
    color: black;
    padding: 1rem;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 3px;
        background-color: ${(props) => (props.$isActive ? "black" : "transparent")};
        top: 0;
        left: 0rem;
        border-radius: 0.125rem;
        z-index: 0;
    }
    background: ${(props) => (props.$isActive ? "rgba(80,80,80, 0.05)" : "transparent")};
`;

export { Logo, ListItem };
