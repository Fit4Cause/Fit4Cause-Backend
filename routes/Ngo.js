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

router.get('/ngo/:category', async (req, res) => {
    try {
        const category = req.params.category.toLowerCase(); // Ensure category is lowercase

        // Find NGOs based on the provided category
        const ngos = await Ngo.find({ category: category });
        res.status(200).json(ngos);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching NGOs by category");
    }
});

router.post('/ngo/donate/:id/', async (req, res) => {
    try {
        const id = req.params.id;

        // Find the user by their ID
        const user = await User.findOne({ id: id });
        if (!user) {
            return res.status(404).send("User not found");
        }

        // Retrieve the Fitcoins of the user
        const fitcoins = user.coins;
        if (fitcoins === 0) {
            return res.status(400).send("Insufficient Fitcoins");
        }

        // Find the NGO by its ID
        const ngo = await Ngo.findOne({ publicKey: id });
        if (!ngo) {
            return res.status(404).send("NGO not found");
        }

        // Check if the user has previously donated to the NGO
        const previousDonationIndex = ngo.raisedAmount.findIndex(donation => donation.id === user.id);
        if (previousDonationIndex !== -1) {
            // If the user has previously donated, update the donation amount
            ngo.raisedAmount[previousDonationIndex].amount += fitcoins;
            ngo.collection += fitcoins;
        } else {
            // If the user has not previously donated, add a new entry
            ngo.raisedAmount.push({ id: user.id, amount: fitcoins, type: 'user' });
            ngo.collection += fitcoins;
        }

        // Deduct the same amount from the user's Fitcoins
        user.coins = 0;
        await user.save();
        
        // Save the updated NGO and user
        await ngo.save();

        res.status(200).send("Donation successful");
    } catch (e) {
        console.log(e);
        res.status(500).send("Error");
    }
});


module.exports = router;
