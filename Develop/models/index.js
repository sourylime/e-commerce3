// import models
const Product = require('./Product.js');
const Category = require('./Category.js');
const Tag = require('./Tag.js');
const ProductTag = require('./ProductTag.js');
const sequelize = require('../config/connection.js');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE', // Cascade delete products associated with a category when the category is deleted
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  onDelete: 'CASCADE', // Cascade delete product tags when a product is deleted
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  onDelete: 'CASCADE', // Cascade delete product tags when a tag is deleted
});

sequelize.sync()
  .then(() => {
    console.log('Tables created!');
  })
  .catch(error => {
    console.error('Error creating tables:', error);
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
