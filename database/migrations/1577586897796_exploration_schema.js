'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExplorationSchema extends Schema {
  up () {
    this.create('explorations', (table) => {
      table.integer('bookingId').unsigned().references('id').inTable('bookings')
      table.string('consumedMedications')
    })
  }

  down () {
    this.drop('explorations')
  }
}

module.exports = ExplorationSchema
