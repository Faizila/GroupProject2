const { Exercises } = require('../models')

const exercisedata = [
    {
       exercise_name: 'superman',
       img_start: 'resized_480x360_super_start.jpg',
       img_end: 'resized_480x360_super_end.jpg',
       exercise_type: 'ball',
    },
    {
        exercise_name: 'wall_squat',
        img_start: 'squat_start_1.png',
        img_end: 'squat_end_1.png',
        exercise_type: 'ball',
     },
     {
        exercise_name: 'mid_trap_row',
        img_start: 'resized_500x375_Mid_Trap_Row_Start.jpg',
        img_end: 'resized_500x375_Mid_Trap_Row_End.jpg',
        exercise_type: 'band',
     },
     {
        exercise_name: 'retraction',
        img_start: 'resized_300x334_retraction_1.jpg',
        img_end: 'resized_300x341_retraction_2.jpg',
        exercise_type: 'stretch',
     },
]

const seedExercise = () => Exercises.bulkCreate(exercisedata);

module.exports = seedExercise;
