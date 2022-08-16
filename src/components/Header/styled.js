import styled from "styled-components"

export const HeaderPai = styled.header`
    display: flex;
    height: 10rem;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-bottom: 2px solid #d2dfc8;

    
    @media screen and (max-width: 800px) {
        width: 100%;
        text-align: center;
    }

    @media screen and (max-width: 300px) {
        width: 100%;
        text-align: center;
    }
`
export const Titulo = styled.div`
    font-size: 56px;
    font-family: 'Cinzel', serif;
    color: #03453d;
    
    p {
        margin: 0;

        
    }

    @media screen and (max-width: 800px) {
        font-size: 48px;
        width: 100%;
    }

    @media screen and (max-width: 300px) {
        font-size: 36px;
    }
`

export const Links = styled.div`
    margin: 1rem 0;
    font-size: 16px;
    font-family: 'Kanit', sans-serif;
    

    a {
        text-decoration: none;
        color: #008584;
        margin: 0 2rem;
        padding: 0.5rem 1rem;
    }

    a:hover {
        color: #008584 !important; 
        background-color: #f5f5f5;
        
        border-radius: 0.25rem;
    }

    a:visited {
        color: #595b5a;
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`