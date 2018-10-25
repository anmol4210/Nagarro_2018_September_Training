const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes

const db = new Sequelize({
  dialect: 'sqlite',
  /* server based databases
  username: '...',
  database: '...',
  password: '...',
  host: 'abcd.server.com',
  port: 3333,
   */
  storage: __dirname + '/test.db',
})

const Task = db.define('task', {
  name: {
    type: DT.STRING(50),
    allowNull: false
  },
  priority: {
    type: DT.INTEGER,
    defaultValue: 0
  }
})

const User = db.define('user', {
  name: {
    type: DT.STRING(30),
    allowNull: false
  },
  age: {
    type: DT.INTEGER,
  }
})

async function init () {
  // await Task.sync()
  // await User.sync({alter: true})
  await db.sync()
  await db.authenticate()
}


async function writeTasks () {
  await Task.create({
    name: 'this is a task',
    priority: 3
  })
}

async function doAll () {
  await init()
  await writeTasks()
}

doAll()
