// sql语句
var sqlMap = {
  // 用户
  user: {
    login: 'SELECT realname,phone FROM member WHERE phone = ?;',
    // add: 'insert into admin(username, userpsw) values ( ?, ?);'
  }
}

module.exports = sqlMap;
