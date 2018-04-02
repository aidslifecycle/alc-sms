const router = require('express').Router();

router.post('/login', (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const token = req.body.token;

  firebase.auth().verifyIdToken(token)
    .then((decodedToken) => {
      req.session.decodedToken = decodedToken;
      return decodedToken;
    })
    .then((decodedToken) => res.json({
      status: true,
      decodedToken
    }))
    .catch((error) => res.json({
      error
    }));
});

router.post('/logout', (req, res) => {
  req.session.decodedToken = null;
  res.json({
    status: true
  });
});

router.post('/message/:channel', (req, res) => {
    // sendMessage(toNum, fromNum, data);
    res.json({
      'message': 'hello'
    });
});

module.exports = router;