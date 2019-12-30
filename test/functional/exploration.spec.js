'use strict'

const { test, trait } = use('Test/Suite')('Exploration')
const User = use('App/Models/User')



trait('Test/ApiClient')
trait('Auth/Client')


test('[Test /getExplorations route]', async ({ client }) => {

  const user = await User.find(1)
  
  const response = await client.get('/getExplorations').query({ clinic: 'EXPLANADA',medications: '["ANTIBIOTICS"]', page: 1 }).loginVia(user, 'jwt').end()
  console.log(response)

  response.assertStatus(200)
}).timeout(6000)
