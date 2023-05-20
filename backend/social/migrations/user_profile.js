const knex =require('knex'); 

exports.up = function (knex) {
  return knex.schema.createTable('user_profile', function (table) {
    table.increments('user_id').primary();
    table.string('first_name', 255);
    table.string('last_name', 255);
    table.string('department', 255);
    table.string('designation', 255);
    table.string('image_url', 255);
    table.string('city', 255);
    table.string('country', 255);
    table.string('bio', 255);
    table.integer('employee_id');
    table.json('social_links');
    table.string('tenant_id', 255).references('tenant_id').inTable('tenant_profile');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user_profile');
};
