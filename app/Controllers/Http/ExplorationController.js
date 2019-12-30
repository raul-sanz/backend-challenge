'use strict'
/**
  * @swagger
  *  /getExplorations:
  *  get:
  *    security:
  *      - bearerAuth: []
  *    description: Login to the application
  *    produces:
  *      - application/json
  *    parameters:
  *      - in: query
  *        name: clinic
  *        description: clinica name for relation search.
  *        required: true
  *        type: string
  *      - in: query
  *        name:  medications
  *        description: Array of  consumed medications.
  *        required: true
  *        type: array
  *        items:
  *          type: string
  *    responses:
  *      200:
  *        description: return exploration 
  */

 /**
 * This const representing a Booking model from database.
 * @const Booking
 */
const Booking = use('App/Models/Booking')
/**
 * Define new controller for Explorations methods
 * @class
 */
class ExplorationController {
   /**
    * this method return exploration and booking data
    * @function getData
    * 
    * @param  {} {request use for request data from client to api
    * @param  {} response} use for return any response in json format and status
    * Paginate dato for speed query.
    * @return {Object} data paginate.
    */

  async getData({response,request}){
    try {
      /** Define consts from request query data */
      const page = request.get().page || 1
      const clinicName = request.input('clinic')
      const medications = request.input('medications')
      /**Get data from DB, join exploration and filter, return 50 items for page */
      const bookings = await Booking.query().leftJoin('explorations', 'bookings.id', 'explorations.bookingId').where('clinicName', 'like', `%${clinicName.toUpperCase()}%`).where('explorations.consumedMedications','like', `%${medications}%`).fetch()
      /** Retrun json with data and status 200  */
      return response.status(200).json(bookings)
    } catch (error) {
      /** Retrun error   */
      return response.status(404).json(error)
      
    }
  }
}

module.exports = ExplorationController
