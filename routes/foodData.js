const express = require('express');
const router = express.Router();

router.get('/foodData', (req,res)=>{
        res.send([global.foodItems, global.foodCat]);
     
})


module.exports= router;