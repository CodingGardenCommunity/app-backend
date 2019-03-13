const mongoose = require('mongoose');
require('./faq.model');

const FAQ = mongoose.model('faqs');


async function getAllFAQs(req, res) {
  try {
    const faqs = await FAQ
      .find({})
      .sort({ updatedDate: 'desc' });
    return res.json(faqs);
  } catch ({ message }) {
    return res.status(400).json({ status: 400, message });
  }
}

function addFAQ(/* req, res */) {
  // Insert FAQ into DB
  // Add updated date
}

function deleteFAQ(/* req, res */) {
  // Delete FAQ from DB
}

function updateFAQ(/* req, res */) {
  // Update FAQ in DB
  // Add updated date
}

module.exports = {
  getAllFAQs,
  addFAQ,
  deleteFAQ,
  updateFAQ,
};
