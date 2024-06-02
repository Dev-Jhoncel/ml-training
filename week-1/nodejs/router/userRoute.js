const express = require('express')
const router = express.Router()
const { getAllUser, insertNewUser, getSpecificUser, deleteSpecificUser, updateSpecificUser } = require('../controller/UserController')


router.get('/', getAllUser);

router.get('/:id', getSpecificUser);

router.post('/', insertNewUser);

router.put('/:id', updateSpecificUser);

router.delete('/:id', deleteSpecificUser);

module.exports = router 