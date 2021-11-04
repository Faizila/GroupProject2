const router = require('express').Router();
const withAuth = require('../utils/auth');
const Login = require('../models/Login')


const Exercises = require('../models/Exercises')
const UserExercises = require('../models/UserExercises')



router.get('/', (req, res) => {
    try {

        res.render('homepage')

    } catch (err) {
        res.status(500).json(err);
    }
});


//if the user is noth suthenticated they will be forwarded to login// on the dashboard the user can see their list of exercises.
router.get('/dashboard', withAuth, async (req, res) => {
    try {

     
      
      res.render('dashboard'); 
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  

// export
  module.exports = router;