const mongoose = require("mongoose");
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
    const url =
      "mongodb+srv://ppt123:catdog69@cluster-fit.gx437k6.mongodb.net/fit4Cause";
    await mongoose.connect(url);
<<<<<<< HEAD
    console.log('Connected to MongoDB');
    
  
=======
    console.log("Connected to MongoDB");
    // const foodData= await fetchData();
    // return foodData;
>>>>>>> 3524d0dbdaaf9dc18bd3947cda06f55f448ae151
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};

module.exports = connectMongoose;
