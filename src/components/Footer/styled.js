import styled from "styled-components"

export const FooterPai = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;

    height: 300px;
    justify-content: center;
    color: #2d3a21;
    font-family: 'Kanit', sans-serif;
    gap: 7px;
    margin-top: 4rem;
    margin-left: 2rem;

    @media screen and (max-width: 800px) {
    margin: 0;
    padding: 0;
}

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
    color: #03453d;
    font-family: 'Updock', cursive;
    font-size: 32px;

    @media screen and (max-width: 800px) {
        width: 100%;
        font-size: 24px;
        text-align: center;
        height: 300px;
        padding: 0.5rem;
    }

    h1 {
        padding-bottom: 1rem;
        margin: 0;
    }

    span {
    padding-left: 2rem;
    }

    input {
      padding: 12px 36px;
      border: 1px solid #fffff7;
      box-shadow: 1px 1px 1px #a5c3a7;
      border-style: solid;
      border-width: thin;
    }

    button {
    padding: 1rem;
    width: 100px;
    border: 0.5px solid #efefef;
    border-radius: 1rem;
    background-color: #d2dfc8;
    color: #03453d;
    padding: 14px;
    }

    button:hover {
        background-color: #fff;
        color: #f07c19;
        cursor: pointer;
    }
`

export const MainFooter = styled.footer`
    display: flex;
    height: 150px;
    text-align: center;
    padding: 2rem;
    margin-left: 2rem;
    font-family: 'Kanit', sans-serif;


    div {
        display: flex;
    }
`