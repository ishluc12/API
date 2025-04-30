/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('product').del()  // Clear existing products
    .then(() => knex('users').del())  // Clear existing users
    .then(() => {
      // Inserts seed data into the 'product' table
      return knex('product').insert([
        { product_name: 'Product B', description: 'Description of Product B', quantity: 5, price: 50.5, createdat: '2025-04-15 12:06:29.055808', currentstamp: '2025-04-15 12:06:29.055808' },
        { product_name: 'Product b', description: 'Description of Product b', quantity: 11, price: 25.99, createdat: '2025-04-15 12:20:10.659277', currentstamp: '2025-04-15 12:20:10.659277' },
        { product_name: 'Product b', description: 'Description of Product b', quantity: 11, price: 25.99, createdat: '2025-04-22 21:12:39.54721', currentstamp: '2025-04-22 21:12:39.54721' },
        { product_name: 'irish potatoes', description: 'Description of Product b', quantity: 31, price: 2500.9, createdat: '2025-04-27 21:32:06.156769', currentstamp: '2025-04-27 21:32:06.156769' },
        { product_name: 'gouvers', description: 'Description of Product b', quantity: 110, price: 70.99, createdat: '2025-04-15 12:06:29.051444', currentstamp: '2025-04-29 14:36:35.224492' }
      ]);
    })
    .then(() => {
      // Inserts seed data into the 'users' table
      return knex('users').insert([
        { username: 'john', password: '$2b$10$ONmKKmCmLrTDcnH08gNfxOuBAaorBlQj8ZfB.L6wt8BExME8i8ZuO' },
        { username: 'john lucac', password: '$2b$10$ZAeMsK3OQ4jlJQE4fejQSOL5M0Tsp5u6BSSlXlWcjye9rwP90K2Dy' },
        { username: 'lucac april', password: '$2b$10$KnoP.N3qxTjVVxtf4WJ1meqUwdMl1JMjbbYU4Z/KkHpUHjd0oPBRS' }
      ]);
    });
};
