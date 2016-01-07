var express = require('express');
var model = require('../models/User');
var router = express.Router();

var buildErrorResponse = function(error) {
  return {
    message: error,
    status: 500,
    note: "This response was generated due to user error."
  }
};

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
