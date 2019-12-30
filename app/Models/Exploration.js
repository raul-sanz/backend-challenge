'use strict'

/** 
*  @swagger
*  definitions:
*    Exploration:
*      type: object
*      properties:
*        bookingId:
*          type: uint
*        consumedMedications:
*          type: string
*/

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Exploration extends Model {
  booking(){
    return this.belongsTo('App/Models/Booking')
  }
}

module.exports = Exploration
