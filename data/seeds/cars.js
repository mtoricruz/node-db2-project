
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert(generateCarData());
    });
};

function generateCarData() {
  return [
    {
      VIN: '234SJKDO452SH3',
      Make: 'Toy Yoda',
      Model: 'Baby Yoda',
      Mileage: 39283
    },
    {
      VIN: '234SJKDDF43223',
      Make: 'Accurate',
      Model: 'Grammar',
      Mileage: 123283
    },
    {
      VIN: '234S6898SDFE',
      Make: 'Invisible',
      Model: 'Car',
      Mileage: 45283
    }
  ]
}
