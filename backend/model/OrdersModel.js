const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchema");

const Orders = model("order", OrdersSchema);

module.exports = { Orders };
