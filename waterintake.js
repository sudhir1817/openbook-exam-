const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WaterintakeSchema = new Schema({
  date: { type: Date, required: true },
  amountInLiters: { type: Number, required: true },
  comments: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Waterintake', WaterintakeSchema);

