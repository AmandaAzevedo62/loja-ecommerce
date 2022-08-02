import styled from "styled-components"

export const FooterPai = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    color: #2d3a21;
    font-family: 'Arvo', serif;
    gap: 7px;
    margin-top: 4rem;
    margin-left: 2rem;

    img{
        height: 35px;
    }
`
export const Newsletter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #efefef;
    width: 80%;
    height: 200px;
    color: #2d3a21;

    h1 {
        padding-bottom: 1rem;
    }

    span {
    padding-left: 2rem;
    }

    input {
    padding: 1rem;
    width: 250px;
    border: 1px solid grey;
    border-radius: 5px;
    }

    button {
    padding: 1rem;
    width: 200px;
    border: 1px solid grey;
    border-radius: 25px;
    background-color: #2d3a21;
    color:#fff;
    }

    button:hover {
        background-color: #fff;
        color: #2d3a21;
        cursor: pointer;
    }
`

export const MainFooter = styled.footer`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    text-align: left;
    padding: 2rem;
    margin-left: 2rem;

    div {
        width: 100%;
        display: flex;
        
    }
`

export const Titulo = styled.tr`
    color: #2d3a21;
    font-family: 'Arvo', serif;
    font-weight: bold;
`