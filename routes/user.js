var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('login', { user: req.user });
});

router.post('/', function(req, res) {

});
// router.get('/login', function(req, res){
//   res.render('login', { user: req.user });
// });
//
// router.post('/login', passport.authenticate('local', { failureRedirect: '/user' }), function(req, res) {
//   res.redirect('/');
// });
//
// router.get('/register', function(req, res){
//   // res.render('register', { user: req.user });
// });
//
// router.post('/register', function(req, res){
//   User.register(new User({
//     username: req.body.username //from the form
//   }),
//   req.body.password,
//   function(err, account) {
//     if (err) {
//       return res.render('register', { account: account });
//     }
//     // passport.authenticate('local') is a function
//     passport.authenticate('local')(req, res, function() {
//       res.redirect('/');
//     });
//   });
//
// });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});



module.exports = router;
