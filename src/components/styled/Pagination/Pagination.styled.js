import styled, { keyframes } from "styled-components";

const opacity = keyframes`
    0% {
        display: none;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
`;
const PaginationStyled = styled.div`
    animation: ${opacity} 1s ease-in;
    display: grid;
    grid-template-columns: 50vh 50vh auto;
    grid-template-rows: auto;
    gap: 10px 100px;
    background-color: #4e4a7e;
    margin-top: 3px;
    justify-content: center;
`

export default PaginationStyled