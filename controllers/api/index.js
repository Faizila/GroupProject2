const router = require('express').Router();
const { UserExercises, Exercises } = require('../../models');
const session = require('express-session');

// add to user's list
router.post('/add/:id', async (req, res) => {
    console.log(req.params);
    console.log(req.session.email);

    try {
        // console.log(req.session)
        // find all exercises .findAll
        //         // "exercise_id": "4",
        // // "login_email": "req.sesson" 
        // // const test = req.body + "login_email" + ' + session.login.email
        const addEx = await UserExercises.create({
            exercise_id: parseInt(req.params.id),
            login_email: req.session.email
        },{
         include: [{
            model: Exercises,
            attributes: ['exercise_name','img_start','img_end','starting_tip', 'ending_tip']
        }]   
        }
        
        );


        console.log("======++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++===================================================================================")


        const myExercises = addEx.map(e => e.get({ plain: true }));
        console.log(myExercises)
        res.json("hi")
        

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
