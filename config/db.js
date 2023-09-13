const mongoose = require("mongoose");

const configure = async () => {
  const url = process.env.DB_URL || "mongodb://127.0.0.1:27017";
  const name = process.env.DB_NAME || "expense-validation-app";
  try {
    await mongoose.connect(`${url}/${name}`);
    console.log("connected to mongdb");
  } catch (e) {
    console.log("error occured", e.message);
  }
};

module.exports = configure;
