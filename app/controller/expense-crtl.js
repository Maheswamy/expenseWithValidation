const Expense = require("../model/expense-model");
const { validationResult } = require("express-validator");

const expense = {};

expense.add = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    try {
      const body = req.body;
      const expense = new Expense(body);
      const exp = await expense.save();
      res.json(exp);
    } catch (e) {
      res.status(400).json(e);
    }
  } else {
    res.status(400).json(error.array());
  }
};

expense.remove = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Expense.findByIdAndDelete(id);
    if (deleted) {
      res.json(deleted);
    } else {
      res.json({ error: "expense not found" });
    }
  } catch (e) {
    res.status(400).json(e.message);
  }
};

expense.all = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

expense.update = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    try {
      const id = req.params.id;
      const body = req.body;
      const exp = await Expense.findByIdAndUpdate(id, body, { new: true });
      res.json(exp);
    } catch (e) {
      res.status(400).json(e);
    }
  } else {
    res.status(400).json(error.array());
  }
};

expense.getone=async (req,res)=>{
    const id=req.params.id
    try {
        const expenses = await Expense.findById(id);
        console.log(expenses)
        res.json(expenses);
      } catch (e) {
        res.status(400).json(e.message);
      }

}
module.exports = expense;
