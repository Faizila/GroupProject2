const router = require('express').Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


//  load the list of exercises of the users
// router.post('/addexercise', ensureAuthenticated , async (req, res) => {
//     try {



//     } catch (err) {
//         res.status(500).json(err);
//       }
//     });


// router.delete('/delexercise', ensureAuthenticated , async (req, res) => {
//     try {



//     } catch (err) {
//         res.status(500).json(err);
//       }
//     });














module.exports = router;
