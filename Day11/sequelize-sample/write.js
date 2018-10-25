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

/*
  db.define() creates a table
  1st arg = name of table
  2nd arg = definition (contains list of columns)
 */
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
  const task = await Task.create({
    name: 'this is one more task',
    priority: 2
  })
  console.log(task)
  console.log('==============')
  console.log('==============')
  console.log('==============')

  task.priority = 5
  console.log(task)
  console.log('==============')
  console.log('==============')
  console.log('==============')

  await task.save()
  console.log(task)

}

// doAll makes sure init() and writeTasks()
// run one after another instead of
// starting parallelly.
async function doAll () {
  await init()
  await writeTasks()
}

doAll()
