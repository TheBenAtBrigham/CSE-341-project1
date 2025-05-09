const router = require('express').Router();

router.get('/', (req, res) => {res.send('今日は、世界！');});

router.use('/users', require('./users'));

module.exports = router;