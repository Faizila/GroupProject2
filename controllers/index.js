const router = require('express').Router();
const homeRoutes = require('./home-routes');
// const apiRoutes = require('./api');  // use for getting the exercise data
const userRoutes = require('./userRoutes');




router.use('/', homeRoutes);
router.use('/users', userRoutes);
// router.use('/api', apiRoutes);




module.exports = router;
