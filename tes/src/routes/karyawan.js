const router = require('express').Router()

const { postDataKaryawan, getDataKaryawan } = require('../controller/karyawan')

router.post("/", postDataKaryawan);
router.get("/data", getDataKaryawan)

module.exports = router