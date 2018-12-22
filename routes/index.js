const express = require('express')
const router = express.Router()

// get
router.get('/', (req, res, next) => {
  res.json({
    ok: true,
    data: 'Index get'
  })
})

// post
router.post('/', (req, res, next) => {
  let username = req.body.username
  let password = req.body.password

  let user = {
    username: username,
    password: password
  }

  res.json({
    ok: true,
    userInfo: user
  })
})

module.exports = router