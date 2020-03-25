const express = require('express')
const OngController = require('./controller/OngController')
const IncidentsController = require('./controller/IncidentsController')
const ProfileController = require('./controller/ProfileController')
const SessionControllers = require('./controller/SessionController')


const routes = express.Router();

routes.post('/sessions', SessionControllers.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

routes.get('/profile', ProfileController.index);

module.exports = routes;