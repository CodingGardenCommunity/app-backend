const mongoose = require('mongoose');

const { Schema } = mongoose;

const FAQSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  dateUpdated: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

mongoose.model('faqs', FAQSchema);
