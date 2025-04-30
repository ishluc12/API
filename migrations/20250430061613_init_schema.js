/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        // Create the 'users' table
        .createTable('users', function (table) {
            table.increments('id').primary(); // auto-incrementing primary key
            table.string('username').notNullable().unique(); // unique username
            table.string('password').notNullable(); // hashed password
        })
        // Create the 'product' table
        .createTable('product', function (table) {
            table.increments('product_id').primary(); // auto-incrementing primary key
            table.string('product_name', 50).notNullable(); // name of the product
            table.text('description').nullable(); // description of the product
            table.integer('quantity').notNullable(); // quantity of the product
            table.float('price').nullable(); // price of the product
            table.timestamp('createdat').defaultTo(knex.fn.now()); // created timestamp
            table.timestamp('currentstamp').defaultTo(knex.fn.now()); // updated timestamp
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('product')
        .dropTableIfExists('users');
};
