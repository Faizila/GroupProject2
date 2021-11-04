// import
const router = require('express').Router();
const { Exercises, UserExercises } = require('../models');
// Authentication

// '/exercise' endpoint

// GET all 3 categories 
router.get('/', (req, res) => {
    try {
     
        // success
        // exercises.handlebars
        res.render('exercises');
        // error
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET exercise/ball
router.get('/ball', async (req, res) => {
    try {
        // find all exercises .findAll
        const exerciseData = await Exercises.findAll({
            where: { exercise_type: 'ball' },
        });

        const exercises = exerciseData.map(e => e.get({ plain: true }));

        // success
        // ball.handlebars
        res.render('ball', { exercises, loggedIn: req.session.loggedIn })

        console.log(exercises)
        // error
    } catch (err) {
        res.status(500).json(err);
    }
});


//  GET exercise/stretch
router.get('/stretch', async (req, res) => {
    try {
        // find all exercises .findAll
        const exerciseData = await Exercises.findAll({
            where: { exercise_type: 'stretches' },
        });

        const exercises = exerciseData.map(e => e.get({ plain: true }));

        // success
        // stretch.handlebars
        res.render('stretch', { exercises, loggedIn: req.session.loggedIn })

        console.log(exercises)
        // error
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET exercise/band 
router.get('/band', async (req, res) => {
    try {
        // find all exercises .findAll
        const exerciseData = await Exercises.findAll({
            where: { exercise_type: 'band' },
        });

        const exercises = exerciseData.map(e => e.get({ plain: true }));

        // success
        // band.handlebars
        res.render('band', { exercises, loggedIn: req.session.loggedIn })

        console.log(exercises)
        // error
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/list', async (req, res) => {
    try {
        // console.log(req.session)
        // find all exercises .findAll
        const test = await UserExercises.findAll({ where: {login_email: req.session.email },
            include: [{
                model: Exercises,
                attributes: ['exercise_name','img_start','img_end','starting_tip', 'ending_tip', 'exercise_type', 'exercise_path']
            }]
         });

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

// export
module.exports = router;