const router = require('express').Router();
const { Category, Product } = require('../../models');

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [Product] });
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get category by id
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findOne({ 
      where: { id: req.params.id }, 
      include: [Product]
    });
    res.json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Create new category
router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update category by id
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete category by id
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.destroy({ where: { id: req.params.id } });
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
