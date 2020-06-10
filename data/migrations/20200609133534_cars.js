
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('VIN', 15).notNullable().unique();
      tbl.string('Make', 50);
      tbl.string('Model', 50);
      tbl.integer('Mileage');
      tbl.string('Transmission Type', 255);
      tbl.string('Status of Title', 255);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
