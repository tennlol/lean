const { createApi } = require('lean')

const api = createApi()

api.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'alex' }])
})

api.listen(3000)

