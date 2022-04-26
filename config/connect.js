const mysql = require('mysql')
const config = require('./index').mysql

/**
 * createPool vs createConnection
 */
/*
const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
})

connection.connect(err => {
  if (err) {
    console.log('CONNECT MYSQL ERROR:', err)
    process.exit(1)
  } else {
    console.log(`CONNECT MYSQL SUCCESS`)
  } 
})
*/

const pool = mysql.createPool({
  port: config.port,
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
})

const query = (sql, values) => new Promise((resolve, reject) => {
  pool.getConnection((error, connection) => {
    if (error) {
      reject(error)
    } else {
      connection.query(sql, values, (err, rows) => {
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
        connection.release()
      })
    }
  })
})

// 用户表
const USERS_TABLE = 'users_table'
const users = `
  create table if not exists ${USERS_TABLE}(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL COMMENT '账号',
    password VARCHAR(100) NOT NULL COMMENT '密码',
    PRIMARY KEY ( id )
  )
`

const createTable = sql => query(sql, []).catch(e => {
  console.log(`mysql创建表发生错误： ${JSON.stringify(e)}`)
})

createTable(users)

const insertUserInfo = values => query(`insert into ${USERS_TABLE} set username=?, password=?`, [values])

const findUserInfo = (username, password)  => query(`select * from ${USERS_TABLE} where username=? and password=?`, [username, password])

module.exports = {
  insertUserInfo,
  findUserInfo
}
