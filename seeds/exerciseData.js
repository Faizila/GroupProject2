const { Exercises } = require('../models')

const exercisedata = [
    {
       exercise_name: 'Superman',
       exercise_path: 'superman',
       img_start: 'resized_480x360_super_start.jpg',
       img_end: 'resized_480x360_super_end.jpg',
       exercise_type: 'ball',
       starting_tip: 'abc',
       ending_tip: 'abc',
    },
    {
       exercise_name: 'Wall Squat',
       exercise_path: 'wall_squat',
       img_start: 'squat_start_1.png',
       img_end: 'squat_end_1.png',
       exercise_type: 'ball',
       starting_tip: 'def',
       ending_tip: 'def',
     },
     {
       exercise_name: 'Bicep Curl',
       exercise_path: 'bicep curl',
       img_start: 'resized_500x666_Bicep_Curl_Start.jpg',
       img_end: 'resized_500x666_Bicep_Curl_End.jpg',
       exercise_type: 'band',
       starting_tip: 'defgsdf',
       ending_tip: 'defddf',
     },
     {
       exercise_name: 'Mid Trap Row',
       exercise_path: 'mid_trap_row',
       img_start: 'resized_500x375_Mid_Trap_Row_Start.jpg',
       img_end: 'resized_500x375_Mid_Trap_Row_End.jpg',
       exercise_type: 'band',
       starting_tip: 'dasdff',
       ending_tip: 'defsdfsdfddf',
     },
     {
       exercise_name: 'Lateral Flexion',
       exercise_path: 'lateral_flexion',
       img_start: 'resized_300x454_lat._flex._1.jpg',
       img_end: 'resized_300x454_lat_flex_2.jpg',
       exercise_type: 'stretches',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     {
       exercise_name: 'Retraction',
       exercise_path: 'retraction',
       img_start: 'resized_300x334_retraction_1.jpg',
       img_end: 'resized_300x341_retraction_2.jpg',
       exercise_type: 'stretches',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
]

const seedExercise = () => Exercises.bulkCreate(exercisedata);

module.exports = seedExercise;
