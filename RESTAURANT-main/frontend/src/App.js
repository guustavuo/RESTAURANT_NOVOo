import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Login from './pages/login.js';
//import Signup from './pages/Signup';
import Login from '.pages/login';

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    const response = await axios.get('http://localhost:5000/api/users');
    setUsuarios(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome || !email || !idade) return;

    const newUser = { nome, email, idade: parseInt(idade) };

    try {
      await axios.post('http://localhost:5000/api/users', newUser);
      fetchUsuarios();
      setNome('');
      setEmail('');
      setIdade('');
    } catch (error) {
      console.error('Erro ao criar usuário', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      fetchUsuarios();
    } catch (error) {
      console.error('Erro ao deletar usuário', error);
    }
  };

  const handleUpdate = async (id) => {
    const updatedUser = { nome, email, idade: parseInt(idade) };
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, updatedUser);
      fetchUsuarios();
      setNome('');
      setEmail('');
      setIdade('');
    } catch (error) {
      console.error('Erro ao atualizar usuário', error);
    }
  };

  return (
    <div>
      <h1>CRUD de Usuários</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <button type="submit">Criar Usuário</button>
      </form>

      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario._id}>
            {usuario.nome} - {usuario.email} - {usuario.idade}
            <button onClick={() => handleUpdate(usuario._id)}>Atualizar</button>
            <button onClick={() => handleDelete(usuario._id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
