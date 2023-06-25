const express = require('express')
const router = express.Router()
const UsuarioController = require('../controllers/UsuarioController')

router.get('/registro', UsuarioController.registro)
router.post('/registro', UsuarioController.validacaoRegistro)
router.get('/acessar', UsuarioController.acessarConta)
router.post('/add', UsuarioController.criarContar)

module.exports = router