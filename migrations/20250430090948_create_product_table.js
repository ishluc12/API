exports.up = function (knex) {
    return knex.schema.createTable('product', function (table) {
        table.increments('product_id').primary();
        table.string('product_name');
        table.text('description');
        table.integer('quantity');
        table.decimal('price', 10, 2);
        table.timestamp('currentstamp').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('product');
};
