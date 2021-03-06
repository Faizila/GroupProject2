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
       exercise_name: 'Opposite Arm-Leg',
       exercise_path: 'opposite_arm-leg',
       img_start: 'resized_480x360_opp_arm_start.jpg',
       img_end: 'resized_480x360_opp_arm_end.jpg',
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
       starting_tip: 'Feel for a stretch accross your upper back in this postion.',
       ending_tip: 'Squeeze your shoulder blades together, but keep you chest lifted.',
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
      exercise_name: 'Prone Extension',
      exercise_path: 'prone_extension',
      img_start: 'resized_500x375_Prone_Extension_Start.jpg',
      img_end: 'resized_500x375_Prone_Extension_End.jpg',
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
     {
      exercise_name: 'Retraction Extension',
      exercise_path: 'retraction_extension',
      img_start: 'resized_300x341_ret_ext._1.jpg',
      img_end: 'resized_300x315_ret_ext._2.jpg',
      exercise_type: 'stretches',
      starting_tip: 'dfdfdfd',
      ending_tip: 'erererr',
     },
     {
      exercise_name: 'Rotation Extension',
      exercise_path: 'rotation extension',
      img_start: 'resized_300x442_corner_1.jpg',
      img_end: 'resized_300x442_corner_2.jpg',
      exercise_type: 'stretches',
      starting_tip: 'dfdfdfd',
      ending_tip: 'erererr',
     },
     {
      exercise_name: 'Rotation Flextion',
      exercise_path: 'rotation_flextion',
      img_start: 'resized_300x493_underarm_1.jpg',
      img_end: 'resized_300x508_underarm_2.jpg',
      exercise_type: 'stretches',
      starting_tip: 'dfdfdfd',
      ending_tip: 'erererr',
     },
     {
      exercise_name: 'Slide Glide',
      exercise_path: 'slide_glide',
      img_start: 'resized_300x550_side_glide_1.jpg',
      img_end: 'resized_300x597_side_glide_2.jpg',
      exercise_type: 'stretches',
      starting_tip: 'dfdfdfd',
      ending_tip: 'erererr',
     },
     {
      exercise_name: 'Standing Extension',
      exercise_path: 'standing_extension',
      img_start: 'resized_500x666_Standing-Extension-Start_1.jpg',
      img_end: 'resized_500x666_Standing_Extension_End.jpg',
      exercise_type: 'stretches',
      starting_tip: 'dfdfdfd',
      ending_tip: 'erererr',
     },
     {
       exercise_name: 'Ab Crunch',
       exercise_path: 'ab_crunch',
       img_start: 'resized_480x360_ab_start.jpg',
       img_end: 'resized_480x360_ab_end.jpg',
       exercise_type: 'ball',
       starting_tip: 'Keep your chin tucked',
       ending_tip: 'Keep your chin tucked. Pull your low belly in.',
     },
     {
       exercise_name: 'Extension',
       exercise_path: 'extension',
       img_start: 'resized_480x360_ext_start.jpg',
       img_end: 'resized_480x360_ext_end.jpg',
       exercise_type: 'ball',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     {
       exercise_name: 'Lunge',
       exercise_path: 'lunge',
       img_start: 'lunge_start_1.png',
       img_end: 'lunge_end_1.png',
       exercise_type: 'ball',
       starting_tip: 'Keep your low belly pulled in, and your glutes activated.',
       ending_tip: 'If you feel pain in your knee ease up on the stretch.',
     },
     {
       exercise_name: 'Lat Pull',
       exercise_path: 'lat_pull',
       img_start: 'resized_500x666_Lat_Pull_Start.jpg',
       img_end: 'resized_500x666_Lat_Pull_End.jpg',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     {
       exercise_name: 'Low Trap Row',
       exercise_path: 'low_trap_row',
       img_start: 'resized_500x375_Lower_Trap_Row_Start.jpg',
       img_end: 'resized_500x375_Lower_Trap_Row_End.jpg',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     
     {
       exercise_name: 'Overhead Press',
       exercise_path: 'overhead_press',
       img_start: 'resized_360x442_shoulder_press_a_1.png',
       img_end: 'resized_360x428_shoulder_press_b_1.png',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     
     {
       exercise_name: 'Pec Push',
       exercise_path: 'pec_push',
       img_start: 'resized_500x666_Pec_Push_Start.jpg',
       img_end: 'resized_500x666_Pec_Push_End.jpg',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     
     {
       exercise_name: 'Shoulder Retraction',
       exercise_path: 'shoulder_ retraction',
       img_start: 'resized_500x375_Scapula_Retraction_Start.jpg',
       img_end: 'resized_500x375_Scapula_Retraction_End.jpg',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     
     {
       exercise_name: 'Shoulder Abduction',
       exercise_path: 'shoulder_abduction',
       img_start: 'resized_360x406_shoulder_abduction_a_1.png',
       img_end: 'resized_360x399_shoulder_abduction_b_1.png',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     
     {
       exercise_name: 'Shoulder Extension',
       exercise_path: 'shoulder_extension',
       img_start: 'resized_480x416_shoulder_extension_a_1.png',
       img_end: 'resized_480x407_shoulder_extension_b_1.png',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     
     {
       exercise_name: 'Shoulder Flexion',
       exercise_path: 'shoulder_flexion',
       img_start: 'resized_480x360_shoulder_flexion_a_1.png',
       img_end: 'resized_480x360_shoulder_flexion_a_1.png',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     
     {
       exercise_name: 'Shoulder Eternal Rotation',
       exercise_path: 'shoulder_external_rotation',
       img_start: 'resized_480x360_shoulder_ext._rotation_a.jpg',
       img_end: 'resized_480x360_shoulder_external_rotation_b.jpg',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     
     {
       exercise_name: 'Shoulder Internal Rotation',
       exercise_path: 'shoulder_internal_rotation',
       img_start: 'resized_480x395_shoulder_internal_rotation_a_1.png',
       img_end: 'resized_480x400_shoulder_internal_rotation_b_1.png',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     
     {
       exercise_name: 'Shoulder Shrug',
       exercise_path: 'shoulder_shrug',
       img_start: 'resized_500x666_Shrug_Start.jpg',
       img_end: 'resized_500x666_Shrug_End.jpg',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     
     {
       exercise_name: 'Triceps Push',
       exercise_path: 'triceps push',
       img_start: 'resized_500x666_Tricep_Push_Start.jpg',
       img_end: 'resized_500x666_Tricep_Push_End.jpg',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     
     {
       exercise_name: 'Upper Trap Row',
       exercise_path: 'upper_trap_row',
       img_start: 'resized_500x375_Upper_Trap_Row_Start.jpg',
       img_end: 'resized_500x375_Upper_Trap_Row_End.jpg',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     
     {
       exercise_name: 'Wrist Extension',
       exercise_path: 'wrist extension',
       img_start: 'resized_500x666_Wrist_Extension_Start.jpg',
       img_end: 'resized_500x666_Wrist_Extension_End.jpg',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     {
       exercise_name: 'Wrist Flexion',
       exercise_path: 'wrist flexion',
       img_start: 'resized_500x666_Wrist_Flexion_Start.jpg',
       img_end: 'resized_500x666_Wrist_Flexion_End.jpg',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     
     {
       exercise_name: 'Hip Flexion',
       exercise_path: 'hip_flexion',
       img_start: 'resized_500x666_Hip_Flexion_Start.jpg',
       img_end: 'resized_500x666_Hip_Flexion_End.jpg',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     {
       exercise_name: 'Hip Abduction',
       exercise_path: 'hip_abduction',
       img_start: 'resized_500x666_Hip_Abduction_Start.jpg',
       img_end: 'resized_500x666_Hip_Abduction_End.jpg',
       exercise_type: 'band',
       starting_tip: 'Keep your abs activated',
       ending_tip: 'Keep a neutral spine',
     },
     {
       exercise_name: 'Hip Adduction',
       exercise_path: 'hip_adduction',
       img_start: 'resized_500x666_Hip_Adduction_Start.jpg',
       img_end: 'resized_500x666_Hip_Adduction_End.jpg',
       exercise_type: 'band',
       starting_tip: 'Keep your abs active.',
       ending_tip: 'Feel for the muscle in your inner thigh.',
     },
     {
       exercise_name: 'Hip Extension',
       exercise_path: 'hip_extension',
       img_start: 'resized_500x666_Hip_Extension_Start.jpg',
       img_end: 'resized_500x666_Hip_Extension_End.jpg',
       exercise_type: 'band',
       starting_tip: 'dfdfdfd',
       ending_tip: 'erererr',
     },
     
     
     
]

const seedExercise = () => Exercises.bulkCreate(exercisedata);

module.exports = seedExercise;

