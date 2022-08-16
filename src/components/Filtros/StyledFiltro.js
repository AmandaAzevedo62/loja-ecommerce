import styled from "styled-components";

export const Sessao= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
    padding: 10px;
    width: 20vw;
    color: #595b5a;
    font-size: 14px;
    font-family: 'Kanit', sans-serif;
    padding: 2rem;
    

    div {
      padding-bottom: 0.7rem;
    }

    input{
      border: 1px solid #fffff7;
      box-shadow: 1px 1px 1px #a5c3a7;
      border-style: solid;
      border-width: thin;
    }

    input:focus {
      box-shadow: 1px 1px 1px #a5c3a7;
      outline: 0;
    }

    h2{
      color: #008584;
      font-family: 'Kanit', sans-serif;
      font-size: 24px;
    }

    @media screen and (max-width: 800px) {
        
    }
`
