const Router = require('express')
const router = new Router()
const controller = require('../controllers/user.controller')

router.post('/users', controller.createUser)
router.get('/users', controller.getUsers)
router.put('/users', controller.updateUser)
router.delete('/users', controller.deleteAllUsers)
router.delete('/users/:userId', controller.deleteUser)

module.exports = router