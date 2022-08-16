import React from "react";
import { FooterPai , Newsletter , MainFooter, Titulo } from './styled'
import facebook from '../img/facebook.png'


function Footer() {
    return (
        <FooterPai>
            <Newsletter>
                <div>
                    <h1>Cadastre-se e fique por dentro das novidades</h1>
                </div>
            <form action="/pagina-processa-dados-do-form" method="post">
                <span>                    
                    <input type="text" id="name" placeholder="Digite seu nome" />
                </span>
                <span>                    
                    <input type="email" id="mail" placeholder="Digite seu email"/>
                </span>
                <span>
                    <button type="submit">Enviar</button>
                </span>
</form>
            </Newsletter>
            {/* <MainFooter>


                  <div>
                    <p>Entre em contato pelas nossas Redes Sociais</p>
                      <a href="https://pt-br.facebook.com/login/"  target="_blank"><i class='bx bxl-facebook'></i></a>
                      <a href="https://www.instagram.com/accounts/login/?hl=pt-br" target="_blank"><i
                              class='bx bxl-instagram'></i></a>
                      <a href="https://twitter.com/" target="_blank"><i class='bx bxl-twitter'></i></a>
                  </div>

            </MainFooter> */}
        </FooterPai>
    )
}

export default Footer;