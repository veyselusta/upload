const router = require('express').Router()
const User = require('../models/user')

router.get('/', (req, res) => {
  res.send('ok')
})

router.post('/create', async (req, res) => {
  const { name } = req.body

  await User.create({ name })
  res.send('ok')
})

module.exports = router