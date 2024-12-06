const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Criar um usuário
router.post('/', async (req, res) => {
  try {
    const { nome, email, idade } = req.body;
    const user = new User({ nome, email, idade });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar usuário', error });
  }
});

// Obter todos os usuários
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários', error });
  }
});

// Atualizar um usuário
router.put('/:id', async (req, res) => {
  try {
    const { nome, email, idade } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { nome, email, idade }, { new: true });
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar usuário', error });
  }
});

// Deletar um usuário
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar usuário', error });
  }
});

module.exports = router;
