'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/** 
 * Router providing methods related routes, you can read more https://adonisjs.com/docs/4.1/routing 
 * Estructure: Router.method('url','controller.method') optiona .middleware(['auth]) 
 */
Route.post('/login','AuthController.login')
Route.get('/getExplorations','ExplorationController.getData').middleware(['auth'])

