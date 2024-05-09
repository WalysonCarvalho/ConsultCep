import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
 const navigate = useNavigate()
  function handleRedirect (){
    navigate('/consult') 

  }
  return (
    <div className="page">
      <header>
        <h1>Buscador de CEP</h1>
        <p>Preencha o formulário abaixo para consultar seu CEP</p>
      </header>
      <form className="menu-form">
        <fieldset>
          <div class="fieldset-container">
            <legend>INFORMAÇÕES PESSOAIS</legend>

            <div className="colluns-2">
              <div className="input-wrapper">
                <label for="firt-name">Nome</label>
                <input type="text" id="firt-name" required />
              </div>

              <div className="input-wrapper">
                <label for="name-two">Sobrenome</label>
                <input type="text" id="name-two" required />
              </div>
            </div>
          </div>

          <div className="fieldset-container">
            <div className="input-container">
              <label for="emails">
                Email <span>(Digite um e-mail válido.)</span>
              </label>
              <input type="email" id="emails" required />

              <div className="input-container">
                <label for="password">
                  Senha <span>(Minímo 8 caracteres)</span>
                </label>
                <input type="password" minlength="8" id="password" required/>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
      <button onClick={handleRedirect}>
        <input  type="submit" form="menu-form" id="buttons" value="Enviar"/>
      </button>
    </div>
  );
};
