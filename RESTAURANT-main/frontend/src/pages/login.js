// src/components/Login.js
import React, { useState } from "react";
import './Auth.css'; // Importando o estilo CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer a lógica de login, como chamar uma API para autenticar
    console.log("Login realizado com sucesso", { email, senha });
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        <div className="auth-footer">
          <p>Não tem uma conta? <a href="/signup">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
