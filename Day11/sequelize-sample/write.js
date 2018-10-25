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

async function task () {
  await db.sync()
  await db.authenticate()
}

task ()
