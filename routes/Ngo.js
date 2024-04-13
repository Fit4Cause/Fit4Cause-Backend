const express = require("express");
const router = express.Router();
const { Ngo } = require("../models/NGO");
const { User } = require("../models/User");
router.get("/ngo", async (req, res) => {
  try {
    const data = await Ngo.find({});
    res.status(200).json({ data }); // Corrected
  } catch (err) {
    console.log(err);
    res.status(500).send("Error"); // Adjust status code and message as needed
  }
});
router.get("/ngo/:category", async (req, res) => {
  try {
    const category = req.params.category.toLowerCase(); // Ensure category is lowercase
    // Find NGOs based on the provided category
    console.log(category);
    const ngos = await Ngo.find({ category });
    res.status(200).json({ ngos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

router.post("/ngo/donate/:id/", async (req, res) => {
  try {
    const id = req.params.id;

    // Find the user by their ID
    const user = await User.findOne({ id: "2" });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Retrieve the Fitcoins of the user
    const fitcoins = user.coins;
    if (fitcoins === 0) {
      return res.status(400).json({ error: "Insufficient Fitcoins" });
    }

    // Deduct the same amount from the user's Fitcoins
    const donatedAmount = fitcoins;
    user.coins = 0;
    await user.save();

    // Find the NGO by its ID
    const ngo = await Ngo.findOne({ publicKey: id });
    if (!ngo) {
      return res.status(404).json({ error: "NGO not found" });
    }

    // Add the donated amount to the NGO's raisedAmount and collection
    ngo.raisedAmount.push({ id: user.id, amount: donatedAmount, type: "user" });
    ngo.collection += donatedAmount;
    await ngo.save();

    res.status(200).json({ message: "Donation successful" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

module.exports = router;
