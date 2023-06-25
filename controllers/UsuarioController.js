// Models
const Usuario = require('../models/Usuario')

// Hash
const bcrypt = require('bcryptjs')

module.exports = class LoginController {

  static registro(req, res) {
    res.render('usuarios/registro')
  }

  static validacaoRegistro(req, res) {
  
  // Validacoes de cadastro

  }

  static async criarContar(req, res) {

    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha
    const senhaHash = await bcrypt.hash(senha, 5)

    const data = {
      nome,
      email,
      senha: senhaHash
    }

    await Usuario.create(data)

    res.redirect('/usuarios/acessar')

  }

  static async acessarConta(req, res) {

    res.render('usuarios/login')

  }
}