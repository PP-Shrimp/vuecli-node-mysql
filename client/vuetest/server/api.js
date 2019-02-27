const models = require('./db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('./sql');

//连接数据库

const conn = mysql.createConnection(models.mysql);

conn.connect();


//统一返回json格式
const jsonWrite = (res, ret) => {
  if (typeof ret === 'undefined') {
    res.json({
      code: 1,
      msg: 'fail',
      data: ''
    })
  } else {
    res.json({
      code: 0,
      msg: 'success',
      data: ret
    })
  }
}

//登陆接口
router.post('/login', (req, res) => {
  const sql = $sql.user.login;
  const params = req.body;

  console.log('sql', sql);
  console.log('params', params);
  if (params.realname && params.phone) {
    conn.query(sql, [params.phone], (err, result) => {
      if (err) {
        console.log(err)
      }
      if (result) {
        console.log('-------------接口--------------------');
        if (result[0].realname == params.realname) {
          jsonWrite(res, result[0]);
        } else {
          jsonWrite(res, {
            tip: '密码错误'
          });
        }
        console.log(result)
        res.end();
      }
    })
  } else {
    jsonWrite(res, {
      tip: '请输入内容'
    });
  }
})
module.exports = router;
