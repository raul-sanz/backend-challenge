'use strict'

/** 
*  @swagger
*  definitions:
*    Booking:
*      type: object
*      properties:
*        id:
*          type: uint
*        email:
*          type: string
*        name:
*          type: string
*        datetime:
*          type: timestamp
*        clinicName:
*          type: string
*/

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Booking extends Model {
  exploration () {
    return this.hasOne('App/Models/Exploration')
  }
}

module.exports = Booking
