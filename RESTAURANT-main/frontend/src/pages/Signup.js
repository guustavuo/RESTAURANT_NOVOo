// src/components/Signup.js
import React, { useState } from "react";
import './Auth.css'; // Importando o estilo CSS

const Signup = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (senha !== confirmSenha) {
      alert("As senhas não coincidem.");
      return;
    }
    // Aqui você pode fazer a lógica de cadastro, como chamar uma API para registrar o usuário
    console.log("Cadastro realizado com sucesso", { nome, email, senha });
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
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
          <input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
        <div className="auth-footer">
          <p>Já tem uma conta? <a href="/login">Entrar</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
