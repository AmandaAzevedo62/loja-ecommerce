import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 10px;
    color: #008584;
    font-family: 'Kanit', sans-serif;

    @media screen and (max-width: 800px) {
        width: 100%;
        padding: 0;
    }
`

const Produto = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #595b5a;
    padding-right: 20px;
    gap: 8px;

    @media screen and (max-width: 800px) {
        width: 100%;
        padding: 0;}
`
const BotaoRemover = styled.button`
    font-size: 15px;
    height: 30px;
    background: #f07c19;
    color: #fff;   
    border: 1px solid #f0f0d8;
    border-radius: 0.25rem;
    box-shadow: 2px 2px 2px #f0f0d8;
    cursor: pointer;
    text-shadow:none;
`

const ValorTotal = styled.p`
    color: #595b5a;
`

const Cart = (props) => {

    const produtosCarrinho = props.produtos.map((item, index) => {
        return (
            <Produto key={index}>
                <p>{item.quantity}x</p>
                <p>{item.name}</p>
                <BotaoRemover onClick={() => props.removerProduto(item)}>Remover</BotaoRemover>
            </Produto>
        )
    })

    const totalCompra = props.produtos.reduce((a, b) => a + b.price * b.quantity, 0)

    return (
        <Container>
            <h2>Carrinho</h2>
            {produtosCarrinho}
            <ValorTotal>
                <span>Valor Total: R$ </span>
                {totalCompra > 0 &&
                    totalCompra.toFixed(2)}
            </ValorTotal>
        </Container>
    )
}

export default Cart;