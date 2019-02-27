const models = require('./db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('./sql');

//连接数据库

const conn = mysql.createConnection(models.mysql);

conn.connect();

const jsonWrite = (res, ret) => {
  if (typeof ret === 'undefined') {
    res.json({
      code: 1,
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

//登陆接口
router.post('/login', (req, res) => {
  const sql = $sql.user.login;
  const params = req.body;

  console.log('sql', sql);
  console.log('params', params);

  conn.query(sql, [params.phone], (err, result) => {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result);
      for (let i = 0; i < result.length; i++) {
        console.log('请求回来', result[i]);
        console.log('请求结果', typeof result[i], result[i].realname);
        if (result[i].realname == params.realname) {
          res.send('返回回来了')
        }
      }
      res.end('is over')
    }
  })

})
module.exports = router;
