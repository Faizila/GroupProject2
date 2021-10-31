const Login = require('./Login');
const Exercises = require('./Exercises');
const UserExercises = require('./UserExercises');

Login.hasMany(UserExercises, {
  foreignKey: 'login_email',
});

UserExercises.belongsTo(Login, {
  foreignKey: 'login_email',
});

UserExercises.hasMany(Exercises, {
    foreignKey: 'exercise_id',
  });
  
Exercises.belongsTo(UserExercises, {
    foreignKey: 'exercise_id',
  });

module.exports = { Login, Exercises, UserExercises };