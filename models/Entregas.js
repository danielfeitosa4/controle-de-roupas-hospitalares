const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Entregas = db.define('Entregas', {
  tamCamisa: {
    type: DataTypes.STRING,
    required: true
  },
  tamCalca: {
    type: DataTypes.STRING,
    required: true
  }
})

module.exports = Entregas