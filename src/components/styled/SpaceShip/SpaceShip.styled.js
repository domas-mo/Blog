import styled from "styled-components";

const StyledSpaceShip = styled.div`
    margin: 0 auto;
    background: #e9eaee;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    h1 {
        margin: 1rem;
        font-size: 40px;
        color: #4e4a7e;
        letter-spacing: 3px;
        margin-top: 1rem;
        text-align: center;
        padding-top: 20px;
    }

    img {
        margin: 2rem;
    }

    p {
        width: 100vh;
        font-size: 20px;
        text-align: center;
        color: #60666d
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