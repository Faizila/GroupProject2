const sequelize = require('../config/connection');
const seedLogin = require('./loginData');
const seedExercise = require('./exerciseData');
const seedUserExercises = require('./userExerciseData');

const seedAll = async () => {
    await sequelize.sync({force: false});
    await seedExercise();
    await seedLogin();
    await seedUserExercises();

    console.log('<-- all seeds planted-->');

    process.exit(0);
};

seedAll();