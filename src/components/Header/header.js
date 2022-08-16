import React from "react";
import {HeaderPai, Titulo, Links} from './styled'

function Header() {
    return (
        <HeaderPai>

            <Titulo>
                <p>Cosméticos</p>
            </Titulo>
            <Links>
                <a href="">Home</a>
                <a href="">Produtos</a>
                <a href="">Localização</a>
                <a href="">Contato</a>
            </Links>
        </HeaderPai>
    )
}

export default Header;