const { UserExercises } = require('../models');

const userexercisesdata = [
    {
       exercise_id: 4,
       login_email: 'kevinTupik@gmail.com', 
    },
    {
        exercise_id: 4,
        login_email: 'Ashley.Rodriguez!%#$@gmail.com', 
    },
    {
        exercise_id: 4,
        login_email: 'Emma!Jones!@hotmail.com', 
    },
    {
        exercise_id: 3,
        login_email: 'tomsmith25@gmail.com', 
    },
    {
        exercise_id: 3,
        login_email: 'kevinTupik@gmail.com', 
    },
    {
        exercise_id: 3,
        login_email: 'Ashley.Rodriguez!%#$@gmail.com', 
    },
    {
        exercise_id: 2,
        login_email: 'tomsmith25@gmail.com', 
    },
    {
        exercise_id: 2,
        login_email: 'MIKECHAN54@hotmail.com', 
    },
    {
        exercise_id: 1,
        login_email: 'MIKECHAN54@hotmail.com', 
    },
    {
        exercise_id: 1,
        login_email: 'Ashley.Rodriguez!%#$@gmail.com', 
    },
]

const seedUserExercises = () => UserExercises.bulkcreate(userexercisesdata);

module.exports = seedUserExercises;