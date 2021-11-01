const router = require('express').Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//homepage -- if they authenticated they will be forwarded to the dashboard
router.get('/', (req, res) => {
    try {

        res.render('homepage')

    } catch (err) {
        res.status(500).json(err);
    }
});


//if the user is noth suthenticated they will be forwarded to login// on the dashboard the user can see their list of exercises.
// router.get('/dashboard', ensureAuthenticated, async (req, res) => {
//     try {
     
      
//       res.render('dashboard'); 
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  

// router.get('/exercises', ensureAuthenticated, async (req, res) => {
//     try {
     
      
//       res.render('exercises'); 
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
// router.get('/ex-ball', ensureAuthenticated, async (req, res) => {
//     try {
     
      
//       res.render('ex-ball'); 
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
// router.get('/ex-stretch', ensureAuthenticated, async (req, res) => {
//     try {
     
      
//       res.render('ex-stretch'); 
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
// router.get('/ex-band', ensureAuthenticated, async (req, res) => {
//     try {
     
      
//       res.render('ex-band'); 
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  




  module.exports = router;