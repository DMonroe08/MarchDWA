module.exports = (express) => {
  const router = express.Router();

router.post('/urls', (rep, res) => {
  var short = require('../shortener');
  res.json({original: req.body.shortened,
    shortened: short.shortenURL()});
});
return router;
}
