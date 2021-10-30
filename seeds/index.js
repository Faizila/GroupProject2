const sequelize = require('../config/connection');
const seedLogin = require('./loginData');
const seedExercises = require('./exerciseData');
const seedUserExercises = require('./userExerciseData');

const seedAll = async () => {
    await sequelize.sync({force: false});
    await seedLogin();
    await seedExercises();
    await seedUserExercises();

    process.exit(0);
}

seedAll();