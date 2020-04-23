var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({test:'这是服务器发送的数据！'});
});

module.exports = router;
