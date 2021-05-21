const router = require('./router');

router.get('/', (req, res) => {
    res.send('Hola desde Posts');
});

module.exports = router;
