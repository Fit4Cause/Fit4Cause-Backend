const mongoose = require("mongoose");
require("dotenv").config();
const fetchData = async () => {
  try {
    const foodItemsFetch = mongoose.connection.db.collection("foodData");
    const foodItemsData = await foodItemsFetch.find({}).toArray();

    try {
      const foodCatfetch = mongoose.connection.db.collection("foodCategory");
      const foodCatData = await foodCatfetch.find({}).toArray();
      global.foodItems = foodItemsData;
      global.foodCat = foodCatData;
    } catch (err) {
      console.log("error fetching food category:", err);
    }
  } catch (err) {
    console.log("Error fetching data:", err);
    throw err; // Propagate the error if needed
  }
};

const connectMongoose = async () => {
  try {
    const url = process.env.MONGODB_CONNECTION_STRING;
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
    // const foodData= await fetchData();
    // return foodData;
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};

module.exports = connectMongoose;
