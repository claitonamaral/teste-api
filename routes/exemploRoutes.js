/**
 * @swagger
 * /api/exemplo:
 *   get:
 *     summary: Retorna uma mensagem de exemplo.
 *     responses:
 *       200:
 *         description: Sucesso.
 *         content:
 *           application/json:
 *             example:
 *               mensagem: 'Olá, mundo!'
 */

const express = require('express');
const router = express.Router();
const ExemploController = require('../controllers/exemploController');

router.get('/exemplo', ExemploController.obterExemplo);

module.exports = router;
