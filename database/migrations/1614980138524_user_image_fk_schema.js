'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserImageFkSchema extends Schema {
  up () {
    this.create('user_image_fks', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_image_fks')
  }
}

module.exports = UserImageFkSchema
