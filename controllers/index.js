// import
const router = require('express').Router();
const homeRoutes = require('./home-routes');
const exerciseRoutes = require('./exerciseRoutes');
// const apiRoutes = require('./api');  // use for getting the exercise data
const userRoutes = require('./userRoutes');

router.use('/', homeRoutes);
router.use('/exercise', exerciseRoutes);
// router.use('/users', userRoutes);
// router.use('/api', apiRoutes);

// export
module.exports = router;
