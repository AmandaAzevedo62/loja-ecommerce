import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-family: 'Arvo', serif;
    color: #2d3a21;
`

export const Filtros = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content:center;
    text-align: center;
    padding: 20px;
    gap: 15px;
    width: 80%;
    margin-left: 10%;
`

export const Prod = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-family: 'Arvo', serif;
    gap: 5px;
    align-items: center;

    img{
        width: 100%;
        height: 85%;
    }

    button{
        font-size: 15px;
        height: 50px;
        background: #bc7d50;
        color: #fff;   
        border: 1px solid #eee;
        border-radius: 15px;
        box-shadow: 5px 5px 5px #eee;
        text-shadow:none;
        cursor: pointer;
}

    button:hover {
        background-color: #e3b494;
    }

    button:active {
        background-color: #fff;
        color: #bc7d50;
    }
`
