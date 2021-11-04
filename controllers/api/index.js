const router = require('express').Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const { UserExercises } = require('../../models');
const session = require('express-session');

// add to user's list
router.post('/add', async (req, res) => {
    try {
        // console.log(req.session)
        // find all exercises .findAll
        // "exercise_id": "4",
// "login_email": "req.sesson" 
// const test = req.body + "login_email" + ' + session.login.email
        const addEx = await UserExercises.create(test);
          

        console.log("=========================================================================================")

        
        const myExercises =  test.map(e => e.get({ plain: true }));
console.log(myExercises)
        // success
        // stretch.handlebars
        res.render('mylist', {myExercises, loggedIn: req.session.loggedIn})


        // error
    } catch (err) {
        res.status(500).json(err);
    }
});


// router.delete('/delexercise', ensureAuthenticated , async (req, res) => {
//     try {



//     } catch (err) {
//         res.status(500).json(err);
//       }
//     });














module.exports = router;
