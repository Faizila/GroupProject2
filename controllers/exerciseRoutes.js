// import
const router = require('express').Router();
const { Exercises, Login, UserExercises } = require('../models');
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
  
// POST exercise/ball
router.post('/ball', async (req, res) => {
    try {
        // find all exercises .findAll
        const exerciseData = await Exercises.findAll({
            where: { exercise_type: req.body.exercise_type },
            });
     
        // success
        // ball.handlebars
        res.render('ball'); 
        // error
        } catch (err) {
        res.status(500).json(err);
        }
    });
           
  
// POST exercise/stretch
router.post('/stretch', async (req, res) => {
    try {
        // find all exercises .findAll
        const exerciseData = await Exercises.findAll({
            where: { exercise_type: req.body.exercise_type },
            });
     
        // success
        // stretch.handlebars
        res.render('stretch'); 
        // error
        } catch (err) {
        res.status(500).json(err);
        }
    });
            
// POST exercise/band 
router.post('/band', async (req, res) => {
        try {
            // find all exercises .findAll
            const exerciseData = await Exercises.findAll({
                where: { exercise_type: req.body.exercise_type },
                });
         
            // success
            // band.handlebars
            res.render('band'); 
            // error
            } catch (err) {
            res.status(500).json(err);
            }
        });

// export
module.exports = router;