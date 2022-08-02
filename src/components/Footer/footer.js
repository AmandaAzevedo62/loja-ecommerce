import React from "react";
import { FooterPai , Newsletter , MainFooter, Titulo } from './styled'
import facebook from '../img/facebook.png'
import insta from '../img/insta.png'

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
                <span class="button">
                    <button type="submit">Enviar sua mensagem</button>
                </span>
</form>
            </Newsletter>
            <MainFooter>
            <div>
                <div>
                <div>
                  <table>
                  <Titulo>Menu</Titulo>
                  <tr><a href="#">Quem somos</a></tr>
                  <tr><a href="#">Nossos produtos</a></tr>
                  <tr><a href="#">Contatos</a></tr>
                  </table>
              </div>

              <div>
                  <table>
                  <Titulo>Menu</Titulo>
                  <tr><a href="#">Quem somos</a></tr>
                  <tr><a href="#">Nossos produtos</a></tr>
                  <tr><a href="#">Contatos</a></tr>
                  </table>
              </div>

              <div>
                  <table>
                  <Titulo>Menu</Titulo>
                  <tr><a href="#">Quem somos</a></tr>
                  <tr><a href="#">Nossos produtos</a></tr>
                  <tr><a href="#">Contatos</a></tr>
                  </table>
              </div>

              <div>
                  <h4>Nossos contatos</h4>
                  <div class="social">
                      <a href="https://pt-br.facebook.com/login/" target="_blank"><i class='bx bxl-facebook'></i></a>
                      <a href="https://www.instagram.com/accounts/login/?hl=pt-br" target="_blank"><i
                              class='bx bxl-instagram'></i></a>
                      <a href="https://twitter.com/" target="_blank"><i class='bx bxl-twitter'></i></a>
                  </div>
              </div>
          </div>
      </div>
            </MainFooter>
        </FooterPai>
    )
}

export default Footer;