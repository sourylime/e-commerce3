const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];


const seedCategories = async () => {
  await Category.sync(); // Create the category table if it doesn't exist
  await Category.bulkCreate(categoryData);
};

module.exports = seedCategories;
