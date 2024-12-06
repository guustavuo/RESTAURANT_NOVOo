import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css';  // Para RegisterPage

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate no lugar de useHistory

  const handleRegister = (e) => {
    e.preventDefault();
    // Aqui você faria a lógica de cadastro
    console.log('Cadastro:', email, password);
    navigate('/restaurants'); // Use navigate para redirecionar
  };

  return (
    <div>
      <h2>Cadastrar</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
