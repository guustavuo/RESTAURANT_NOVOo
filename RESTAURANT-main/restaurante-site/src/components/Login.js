import React from "react";
import "./LoginPage.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">CLICK & EAT</h1>
        <p className="login-subtitle">A COMIDA MAIS RÁPIDO NA SUA MESA</p>
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" placeholder="Digite seu usuário" />
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha" />
            <button type="submit">Entrar</button>
          </form>
          <a href="#" className="forgot-password">Esqueceu a senha?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
