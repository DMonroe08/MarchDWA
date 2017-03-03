module.exports = (express) => {

const router = express.Router();

router.get('/url', (req, res) => {
  console.log('router working', req.body);
  res.json({working: 'Yes!'})
});

 router.use('/api/v1', require('./api/url')(express));

return router;
} //ends module.exports
