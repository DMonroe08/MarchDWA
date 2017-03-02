//exports what the router comes up with
module.exports = (express) => {
  const router = express.Router();

router.post('/urls', (req, res) => {
  var short = require('../shortener');
  res.json({original: req.body.shortened,
    shortened: short.shortenURL()});
});
return router;
}
