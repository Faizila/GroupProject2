const router = require('express').Router();
const Login = require('../models/Login')


//the whole path is /users/login

// login post route
router.post('/login', async (req, res) => {
  try {
    console.log("======================================================================================================================")
    const loginData = await Login.findOne({ where: {email: req.body.email } });
    console.log("======================================================================================================================")


    if (!loginData) {
      res.status(400)
      res.json({message: "Your password or email is not correct."});
      return;
    }
console.log(loginData)
console.log(req.body.password)
console.log(req.body.password)
console.log(req.body.password)
console.log(req.body.password)
console.log(req.body.password)
    const validatePassword = await loginData.checkPassword(req.body.password);

  

    if (!validatePassword) {
      res.status(400)
      res.json({message: "234234234234234234234234234234our password or email is not correct."});
      return;
    }

  
     
    req.session.save(() => {
      req.session.user_id = loginData.id
      req.session.email = loginData.email;
      req.session.logged_in = true;

   console.log("======================================================================================================================")
    console.log(req.session)
    console.log("======================================================================================================================")
      
      res.render('dashboard', {
        loggedIn: req.session.loggedIn,
        loggedIn: req.body.loggedIn
      })
    });


} catch (err){
    res.status(400).json(err);
  }
});


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
