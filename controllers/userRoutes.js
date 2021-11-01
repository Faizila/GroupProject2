const router = require('express').Router();
const Login = require('../models/Login')


//the whole path is /users/login
// router.get('/login', async (req, res) => {
//     try {
  
   
//       res.render('login');
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


//login post route
// router.post('/login', async (req, res) => {
//   try {


// } catch (err){
//     res.status(400).json(err);
//   }
// });


//registartion post route

// router.post('/register', async  (req, res) => {
//     try {
     
//     } catch (err) {
//         res.status(500).json(err);
//       }
//     });





// logout request.
    router.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/users/login');
      });
      
    

module.exports = router;
