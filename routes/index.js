const router = require('express').Router();

router.post('/:channel', (req, res) => {
	console.log(req.body);
	res.json({
		'message': 'received'
	});
});

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