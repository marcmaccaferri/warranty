'use strict'
@type {import('@adonisjs/lucid/src/Schema')}

const Schema = use('Schema')

class DevicesSchema extends Schema {
  up () {
    this.create('devices', (table) => {
        table.increments()
        table.string('firstName')
        table.string('lastName')
        table.string('deviceType')
        table.string('serialNumber')
        table.string('coverageLength')
        table.timestamps()
    })
  }

  down () {
    this.drop('devices')
  }
}

module.exports = DeviceSchema
