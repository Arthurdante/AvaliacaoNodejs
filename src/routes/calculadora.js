const express = require('express')
const ControllerExercicio = require('../controllers/calculadora')

const controller = new ControllerExercicio()
const router = express.Router()
router.post('/Calculadora/Somar', controller.Somar)
router.post('/Calculadora/Subtrair', controller.Subtrair)
router.post('/Calculadora/Multiplicar', controller.Multiplicar)
router.post('/Calculadora/Dividir', controller.Dividir)
router.post('/Calculadora/Potencia', controller.Potencia)
router.post('/Calculadora/RaizQuadrada', controller.RaizQuadrada)
router.get('/Calculadora/operations', (req, res) => {
    res.json([
      { name: 'Somar', route: '/Calculadora/Somar' },
      { name: 'Subtrair', route: '/Calculadora/Subtrair' },
      { name: 'Multiplicar', route: '/Calculadora/Multiplicar' },
      { name: 'Dividir', route: '/Calculadora/Dividir' },
      { name: 'Potência', route: '/Calculadora/Potencia' },
      { name: 'Raiz', route: '/Calculadora/RaizQuadrada' }
    ]);
  });

module.exports = router