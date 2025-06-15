const { model } = require("mongoose");

const { PositionSchema } = require("../schemas/PositionSchema");

const Position = model("position", PositionSchema);

module.exports = { Position };
