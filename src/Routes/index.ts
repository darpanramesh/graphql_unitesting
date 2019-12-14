import express from 'express';
const router:express.Router = express.Router()

router.use('/api/', require('./Todo/todo'))


module.exports = router
