'use strict'
/**
  * @swagger
  *  /login:
  *  post:
  *    description: Login to the application
  *    produces:
  *      - application/json
  *    parameters:
  *      - name: email
  *        description: Email to use for login.
  *        in: formData
  *        required: true
  *        type: string
  *      - name: password
  *        description: User's password.
  *        in: formData
  *        required: true
  *        type: string
  *    responses:
  *      200:
  *        description: return token 
  *        example:
  *           {
  *              "type": "bearer",
  *              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU3NzY0ODkxN30.iVWRAYQKfXBQPV9nDl5b9-_pvgsUDTJ80QSJS7kwNoQ",
  *              "refreshToken": null
  *            }
  */
 
 /**
 * This const representing a user model from database.
 * @const User
 */
const User = use('App/Models/User')

/**
 * Define new controller for authentication methods
 * @class
 */
class AuthController {
  async login({ request, response, auth }){

    /**
    * use for login user, validate email and password and return token
    * @function login
    * 
    * @param  {} {request use for request data from client to api
    * @param  {} response use for return any response in json format and status
    * @param  {} auth} use for auth methos
    * Retrun token .
    * @return {Object} Retrun JWT.
    */
    try {
      const token = await auth.attempt(
        request.input('email'),
        request.input('password')
      )

      return response.status(200).json(token)
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: 'Invalid email/password'
      })
    }
  }
}

module.exports = AuthController
