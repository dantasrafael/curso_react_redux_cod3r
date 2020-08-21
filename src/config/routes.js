const express = require('express')
const auth = require('./auth')
const authController = require('../controller/authController')

module.exports = server => {

    // Protected controllers
    const protectedControllers = express.Router()
    server.use('/api', protectedControllers)
    protectedControllers.use(auth)

    const BillingCycle = require('../controller/billingCycleController')
    BillingCycle.register(protectedControllers, '/billingCycles')

    // Public controllers
    const openControllers = express.Router()
    server.use('/oapi', openControllers)

    const AuthController = require('../controller/authController')
    openControllers.post('/login', AuthController.login)
    openControllers.post('/signup', AuthController.signup)
    openControllers.post('/validateToken', AuthController.validateToken)
    
}