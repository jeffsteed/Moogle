var express = require('express');
var router = express.Router();
var user = require('../models/User');

router.get('/', function(req, res, next) {
  model.find(function(err, users) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(users);
    }
  });
});

router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, user) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(user);
    }
  });
});

router.post('/', function(req, res, next) {
  model.create(req.body, function(err, user) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(user);
    }
  });
});

router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(user);
    }
  });
});

router.patch('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(user);
    }
  });
});


router.delete('/:id', function(req, res, next) {
  model.findByIdAndRemove(req.params.id, req.body, function(err, user) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(user);
    }
  });
});

module.exports = router;
