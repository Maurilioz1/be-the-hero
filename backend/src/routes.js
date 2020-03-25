const express = require('express');
const OngController = require('./controllers/OngController');
const CasoController = require('./controllers/CasoController');
const PerfilController = require('./controllers/PerfilController');
const SessaoController = require('./controllers/SessaoController');

const routes = express.Router();

routes.post('/sessao', SessaoController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/perfil', PerfilController.index);

routes.get('/casos', CasoController.index);
routes.post('/casos', CasoController.create);
routes.delete('/casos/:id', CasoController.delete);

module.exports = routes;