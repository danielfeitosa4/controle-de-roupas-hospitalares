const express = require('express')
const router = express.Router()
const ProfissionalController = require('../controllers/ProfissionalController')

router.post('/cadastro', ProfissionalController.inserirCadastro)
router.get('/cadastro', ProfissionalController.cadastroDeEntrega)

module.exports = router 