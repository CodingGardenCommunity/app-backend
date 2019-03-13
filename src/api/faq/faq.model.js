const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema
const FAQSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  updatedDate: {
    type: Date,
    required: true,
  },
});

mongoose.model('faqs', FAQSchema);
