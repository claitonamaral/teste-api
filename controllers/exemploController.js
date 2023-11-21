// controllers/exemploController.js
const ExemploModel = require('../models/exemploModel');

class ExemploController {
  static obterExemplo(req, res) {
    const exemplo = new ExemploModel('Olá, mundo!');
    res.json(exemplo);
  }
}

module.exports = ExemploController;
