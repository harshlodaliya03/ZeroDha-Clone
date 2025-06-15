const mongoose = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchemas");

const HoldingModel = mongoose.model("Holding", HoldingSchema);

module.exports = { HoldingModel };
