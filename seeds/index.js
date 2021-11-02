const sequelize = require('../config/connection');
const seedLogin = require('./loginData');
const seedExercise = require('./exerciseData');
const seedUserExercises = require('./userExerciseData');

const seedAll = async () => {
    await sequelize.sync({force: false});
    console.log('This is NUMBER 1')
    await seedExercise();
    console.log('This is NUMBER 2')
    await seedLogin();
    console.log('This is NUMBER 3')
    await seedUserExercises();
    console.log('This is NUMBER 4')

    console.log('<-- all seeds planted-->');

    process.exit(0);
};

seedAll();