const express = require('express')
const router = express.Router()
const { getAllUser, insertNewUser, getSpecificUser, deleteSpecificUser, updateSpecificUser } = require('../controller/UserController')


router.get('/', getAllUser);

router.get('/:id', getSpecificUser);

router.post('/', insertNewUser);

router.put('/:id', updateSpecificUser);
//Params and Body for updateSpecificUser endpoint
//Request Params: id
//Request Body:
// {
//     "name": "Jhoncel Cadiena",
//     "email": "jhoncel.cadiena@example.com",
//     "age": 25,
//     "address": {
//       "street": "123 Main St",
//       "city": "Anytown",
//       "state": "CA",
//       "zip": "12345"
//     },
//     "phoneNumbers": [
//       {
//         "type": "home",
//         "number": "09959280777"
//       },
//       {
//         "type": "work",
//         "number": "555-5678"
//       }
//     ]
//   }

router.delete('/:id', deleteSpecificUser);

module.exports = router 