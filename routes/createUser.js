const express = require('express');
const router = express.Router();
const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const { query, validationResult, body, check } = require('express-validator');
// var jwt = require('jsonwebtoken');
const secretKey = "phenom@srv";



//validation in user




// //login
// router.post('/login', async (req, res) => {
//    try {
//       const { email, password } = req.body;

//       const user = await User.findOne({ email });

//       if (!user) {  //ya user na ho ya password galat ho
//          res.status(404).json({ msg: "Invalid username or password", success: false });
//          return;
//       }

//       bcrypt.compare(password, user.password).then((data) => {
//          // data === true
//          if (data) {
//             var authToken = jwt.sign({ id: user.id }, secretKey);
//             res.status(200).json({ msg: "Login SuccessFul", success: true, authToken , email});
//             return;
//          }
//          else {
//             res.status(401).json({ msg: "Invalid  password", success: false });
//             return;
//          }
//       });



//    } catch (error) {
//       console.log("Error:", error);
//       res.status(500).send("Internal Server Error");
//    }
// });



// // signup
// router.post('/createuser', createuserValidation(), async (req, res) => {
//    const { name, email, password, location } = req.body;


//    //if error found, it console.logs
//    const result = validationResult(req);
//    if (!result.isEmpty()) {
//       console.log("err");

//       return res.send({ errors: result.array() });
//    }

//    var salt = bcrypt.genSaltSync(10);
//    var hashedPassword = bcrypt.hashSync(password, salt);


//    //everything ok
//    await User.create({ name, email, password: hashedPassword, location })
//    res.json({ success: true });


// })

router.get('/createuser', (req, res) => {
   res.json("get running");
})


router.get('/createuser', () => {
   res.send('hit');
})


module.exports = router;