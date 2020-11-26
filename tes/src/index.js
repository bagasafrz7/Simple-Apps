const route = require("express").Router()

const karyawan = require('./routes/karyawan');
const logic = require('./routes/logic');

route.use('/karyawan', karyawan)
route.use('/logic', logic)

module.exports = route