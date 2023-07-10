const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Profissional = db.define('Profissional', {
  nome: {
    type: DataTypes.STRING,
    required: true
  },
  sobrenome: {
    type: DataTypes.STRING,
    required: true,
  },
  setor: {
    type: DataTypes.STRING,
    required: true
  },
  vinculo: {
    type: DataTypes.STRING,
    required: true
  }
})

module.exports = Profissional