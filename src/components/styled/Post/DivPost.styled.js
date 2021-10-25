import styled from "styled-components";

const DivPost = styled.div`
    width: 50vh;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background: #e9eaee;
    box-shadow: 5.11px 5.11px 21px #2a2654, -5.11px -5.11px 21px #39346b;

    h1,p, button {
        margin: 1rem;
    }

    p {
        color: #60666d
    }

    h1{
        color: #39346b
    }

    button {
        border: none;
        padding: 10px;
        border-radius: 10px;
        background-color: #4e4a7e;
        cursor: pointer;
    }

    button a {
        text-decoration: none;
        color: #ffff;
    }

    button:hover {
        filter: brightness(0.9);
    }

    img {
        width: 100%;
    }

`

export default DivPost