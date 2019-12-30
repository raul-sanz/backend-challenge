'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookingSchema extends Schema {
  up () {
    this.create('bookings', (table) => {
      table.increments()
      table.string('name')
      table.string('email')
      table.datetime('datetime')
      table.string('clinicName')

    })
  }

  down () {
    this.drop('bookings')
  }
}

module.exports = BookingSchema
