const router = require('express').Router()

const { logicOne } = require('../controller/logic')

router.post("/", logicOne);

module.exports = router