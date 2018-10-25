const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes

module.exports = {

  vendor: {
    name: {
      type: DT.STRING(50),
      allowNull: false,
      unique: true
    }
  },

  product: {
    name: {
      type: DT.STRING(100),
      allowNull: false
    },
    price: {
      type: DT.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DT.INTEGER,
      defaultValue: 0
    }
  }
}
