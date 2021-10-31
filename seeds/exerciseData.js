const { Exercises } = require('../models')

const exercisedata = [
    {
       exercise_name: 'Superman',
       img_start: '01-superman-start.jpg',
       img_end: '01-superman-end.jpg',
    },
    {
        exercise_name: 'Wall_Squat',
        img_start: '02-wall-squat-start.jpg',
        img_end: '02-wall-squat-end.jpg',
     },
     {
        exercise_name: 'Mid_Trap_Row',
        img_start: '03-mid_trap_row-start.jpg',
        img_end: '03-mid_trap_row-end.jpg',
     },
     {
        exercise_name: 'Retraction',
        img_start: '04-retraction-start.jpg',
        img_end: '04-retraction-end.jpg',
     },
]

const seedExercise = () => Exercises.bulkcreate(exercisedata);

module.exports = seedExercise;
