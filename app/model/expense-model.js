const mongoose = require("mongoose");
const Category=require('./category-model')
const { Schema, model } = mongoose;

const expenseSchema = new Schema({
  title: String,
  amount: String,
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: Category,
  },
  date: Date,
});
const Expense=model('Expense',expenseSchema)

module.exports=Expense