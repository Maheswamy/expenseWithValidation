
const expenseSchemaValidation = {
  title: {
    notEmpty: {
      errorMessage: "title cannot be empty",
    },
  },
  amount: {
    notEmpty: {
      errorMessage: "amount cannot empty",
    },
    isNumeric: {
      options: { no_symbols: true },
      errorMessage: "please enter the number ",
    },
  },
  date: {
    notEmpty: {
      errorMessage: "please enter the date",
    },
    isDate: {
      options: {
        delimiters: ["-", "/"],
        errorMessage: "enter date in YYYY/MM/DD format",
      },
    },
  },
  categoryId: {
    notEmpty: {
      errorMessage: "please select the category ",
    },
  },
};


module.exports = expenseSchemaValidation;
