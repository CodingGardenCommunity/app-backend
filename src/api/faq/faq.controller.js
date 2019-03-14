// const mongoose = require('mongoose');
require('./faq.model');

// const FAQ = mongoose.model('faqs');

const faqData = [{
  question: 'What break timer do you use?',
  answer: 'It\'s called Time Out by Dejal. It is only available for Mac. For Windows, checkout Eye Leo. I have it setup for a 10 second micro break every 10 minutes and a 5 minute break every 60 minutes.',
},
{
  question: 'Will the livestream be available as a video?',
  answer: 'Yes! Every livestream is immediately available to watch after the stream is over. The URL is will be the same. Longer streams take time to process, but will show up on the Coding Garden videos page after a few hours.',
},
{
  question: 'What code editor do you use?',
  answer: 'In my earlier videos I used Atom. Now I use VS Code. I have lots of plugins and settings that make VS Code behave the way it does. Checkout the vscode-settings repo on github to see all of the plugins and settings I use.',
},
{
  question: 'What theme do you use in VS Code?',
  answer: 'For VS Code I use Seti-Monokai. In my older videos where I am using Atom, I use Brahalla Syntax.',
},
{
  question: 'What keyboard do you use?',
  answer: 'An inexpensive mechanical keyboard from Amazon. Check it out here: https://amzn.to/2EwYmSd',
},
{
  question: 'How long have you been coding?',
  answer: 'Over 15 years! I started coding HTML / CSS websites as a kid. Learned Java, C, C++ in college. Wrote C# / .NET desktop applications for a while. Started learning modern web technologies in my spare time, and taught JavaScript full stack web development for 3+ years.',
},
{
  question: 'What\'s the best way to contact you ?',
  answer: 'Join the discord. https://coding.garden/discord',
},
{
  question: 'How do you add emojis in VS Code?',
  answer: 'This is a feature of Mac OS X. Press CTRL+CMD+Space to bring up the emoji menu! On Windows 10 you can use CTRL+Period  ',
},
];

async function getAllFAQs(req, res) {
  // try {
  //   const faqs = await FAQ
  //     .find({})
  //     .sort({ updatedDate: 'desc' });
  //   return res.json(faqs);
  // } catch ({ message }) {
  //   return res.status(400).json({ status: 400, message });
  // }
  const response = faqData
    .map(({ question, answer }, key) => ({
      data: {
        type: 'faq',
        id: key,
        attributes: {
          question,
          answer,
        },
      },
    }));
  return res.json(response);
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
