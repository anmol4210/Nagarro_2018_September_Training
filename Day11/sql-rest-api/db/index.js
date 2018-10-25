const Sequelize = require('sequelize')
const {
  vendor, product
} = require('./models')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/store.db'
})

const Vendor = db.define('vendor', vendor)
const Product = db.define('product', product)

Product.belongsTo(Vendor)
Vendor.hasMany(Product)


module.exports = {
  db,
  Vendor,
  Product
}
