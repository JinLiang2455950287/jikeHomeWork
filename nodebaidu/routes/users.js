var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('./db.js');
var connection = mysql.createPool(dbconfig);

/*后台页面 */
router.get('/news', function(req, res, next) {
	connection.query('SELECT * FROM `NEWS` order by id desc', function(err, rows) {
		res.json(rows);
	});
});

//确认更新
router.post('/updata', function(req, res) {
	console.log(req);
	var newsid = req.body.newsid,
		newstitle = req.body.newstitle,
		newstype = req.body.newstype,
		newimg = req.body.newsimg,
		newstime = req.body.newstime,
		newssrc = req.body.newssrc;
	connection.query('UPDATE `news` SET `newstitle`=?,`newstype`=?,`newimg` = ? , `newstime` = ? , `newssrc` = ? WHERE news.id = ? ', [newstitle, newstype, newimg, newstime, newssrc, newsid], function(err, rows) {
		if(err) {
			Console.log("出错啦");
		} else {
			res.json(rows);
		}
	});
});

//模态框

router.get('/curnews', function(req, res) {
	var newsid = req.query.newsid;
	connection.query('SELECT * FROM `news` WHERE news.id=?', [newsid], function(err, rows) {
		res.json(rows);
	});
});

//删除
router.post('/delete', function(req, res) {
	var newsid = req.body.newsid;
	connection.query('DELETE FROM news WHERE news.id=?', [newsid], function(err, result) {
		res.json(result);
	});
});

//添加
router.post('/insert', function(req, res) {
	var newsid = req.body.id,
		newstype = req.body.newstype,
		newstitle = req.body.newstitle,
		newsimg = req.body.newimg,
		newstime = req.body.newstime,
		newssrc = req.body.newssrc;
	connection.query('INSERT INTO `news` (`newstitle`,`newstype`,`newimg`,`newstime`,`newssrc`)VALUES (?,?,?,?,?)', [newstitle, newstype, newsimg, newstime, newssrc],
		function(err, result) {
			if(!err) {
				res.json(result.insertId);
			}
		});
});

module.exports = router;