const Category = require("../model/category-model");
const { validationResult } = require("express-validator");

const category = {};

category.add = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    const body = req.body;
    const category = new Category(body);
    const newCategory = await category.save();
    try {
      res.json(newCategory);
    } catch (e) {
      res.status(400).json(encodeURI);
    }
  }
};

category.all = async (req, res) => {
  try {
    const allCat = await Category.find();
    if (allCat) {
      res.json(allCat);
    } else {
      e.status(400).json(allCat);
    }
  } catch (e) {
    res.status(400).json(e);
  }
};
category.single = async (req, res) => {
  const id=req.params.id
  try {
    const allCat = await Category.findById(id);
    if (allCat) {
      res.json(allCat);
    } else {
      e.status(400).json(allCat);
    }
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports = category;
