const router = require('express').Router();
const request = require('request');

router.post('/:channel', (req, res) => {
  console.log(req.body);
  reqPromise().then(data => {
    res.json({
      'message': data
    });
  });
});

function reqPromise() {
  return new Promise((resolve, reject) => {
    request('https://us-central1-alc-sms.cloudfunctions.net/helloWorld', (err, res, body) => {
      if (err) {
        reject(err);
      }
      resolve(body);
    });
  });
}

module.exports = router;


/**
   * Examples of other types of Express/Next requests
   * 
   server.get('/a', (req, res) => {
    return app.render(req, res, '/about', req.query);
  });

  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id });
  });
   */