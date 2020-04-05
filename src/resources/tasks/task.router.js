const router = require('express').Router();

router.get('/', (req, res) => {
  console.log(req.params);
  res.end();
});

module.exports = router;
