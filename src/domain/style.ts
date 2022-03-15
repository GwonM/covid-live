import styled from "styled-components";

const Container = styled.div`
    padding: 2.5rem 0;
    height: max-content;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const LBox = styled.div`
    position: sticky;
    height: 100%;
    top: 2.5rem;
    display: flex;
    flex-direction: column;
    margin-right: 5rem;
    width: 15rem;
`;

const RBox = styled.div`
    border: 1px solid gray;
    border-radius: 10px;
    padding: 1rem;
    width: 30rem;
`;

export { Container, LBox, RBox };
