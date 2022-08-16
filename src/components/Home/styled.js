import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-family: 'Kanit', sans-serif;
    color: #595b5a;
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
    border-radius: 20px;

    @media screen and (max-width: 800px) {
        width: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        margin: 0;
        padding: 0;
    }
`

export const Prod = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-family: 'Kanit', sans-serif;
    gap: 5px;
    align-items: center;
    color: #595b5a;
    text-transform: uppercase;

    
    @media screen and (max-width: 800px) {
        margin: 0 0px;
        padding: 0 0px;
    }
    

    img{
        width: 100%;
        height: 85%;
        border-radius: 5px;

        @media screen and (max-width: 800px) {
        width:100%;
    }
    }

    button{
        font-size: 15px;
        height: 50px;
        background: #f07c19;
        color: #fff;   
        border: 1px solid #f0f0d8;
        border-radius: 0.5rem;
        box-shadow: 2px 2px 2px #f0f0d8;
        text-shadow:none;
        cursor: pointer;
        padding: 0 40px;
}

    button:hover {
        background-color: #f5f5f5;
        box-shadow: 2px 2px 2px #a5c3a7;
        color: #f07c19;
    }

    button:active {
        background-color: #fff;
        color: #bc7d50;
    }


`
