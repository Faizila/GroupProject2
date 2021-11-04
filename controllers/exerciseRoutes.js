// import
const router = require('express').Router();
const { Exercises } = require('../models');
// Authentication

// '/exercise' endpoint

// GET all 3 categories 
router.get('/', (req, res) => {
    try {
            console.log('=====================================exercises============================')
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
            where: { exercise_type: 'stretch' },
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
                const listData = await UserExercises.findAll();
        
                    confirm.log("=========================================================================================")
        
                    console.log(listData)        
                    // const exercises = exerciseData.map(e => e.get({ plain: true }));
                
                    // success
                    // stretch.handlebars
                    res.json('hi')
              
                   
                // error
                } catch (err) {
                res.status(500).json(err);
                }
            });

// export
module.exports = router;