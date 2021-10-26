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

const StyledSpaceShip = styled.div`
    animation: ${opacity} 1s ease-in;
    width: 100%;
    padding: 4rem 0;
    display: flex;
    justify-content: space-evenly;
    background-color: #4e4a7e;

    section {
        width: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 20px;
        background: #e9eaee;
        box-shadow: 5.11px 5.11px 21px #2a2654, -5.11px -5.11px 21px #39346b;
    }
    
    h1 {
        margin: 1rem;
        font-size: 40px;
        color: #4e4a7e;
        letter-spacing: 3px;
        margin-top: 1rem;
        text-align: center;
    }

    img {
        border-radius: 20px;
        max-width: 500px;
        box-shadow: 5.11px 5.11px 21px #2a2654, -5.11px -5.11px 21px #39346b;
    }

    p {
        margin: 0 4rem;
        font-size: 20px;
        color: #60666d;
        margin-bottom: 1rem;
    }
    
    button {
        border: none;
        padding: 10px;
        border-radius: 10px;
        background-color: #4e4a7e;
        color: #ffff;
        cursor: pointer;
        margin-bottom: 1rem;
    }

    button:hover {
        filter: brightness(0.9);
    }
`

export default StyledSpaceShip;