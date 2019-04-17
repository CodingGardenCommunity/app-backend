const FAQ = require('../api/faq/faq.model');

require('dotenv').config();
require('../helpers/databaseConnection');

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
  question: 'What\'s the best way to contact you?',
  answer: 'Join the discord. https://coding.garden/discord',
},
{
  question: 'How do you add emojis in VS Code?',
  answer: 'This is a feature of Mac OS X. Press CTRL+CMD+Space to bring up the emoji menu! On Windows 10 you can use CTRL+Period',
},
];

async function seedFAQs() {
  try {
    await FAQ.deleteMany({});
    await FAQ.insertMany(faqData);
    process.stdout.write('\n\n\x1b[32m DB Seeded with FAQ Data\x1b[0m \n');
  } catch ({ message }) {
    process.stdout.write(`\n\n\x1b[32m ${message}\x1b[0m \n`);
  }
}
module.exports = seedFAQs;
