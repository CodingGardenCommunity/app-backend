const colors = require('colors/safe');
const History = require('../../api/history/history.model');

const historyData = [{
  type: 'milestone',
  name: 'Coding Garden Created!',
  date: '2015-10-13',
  description: 'When the legend started...',
},
{
  type: 'video',
  name: 'First video!',
  videoID: 'WYa47JkZH_U&t=552s',
  title: 'Build a Full Stack JavaScript CRUD App with Node/Express/Handlebars/Bootstrap/Postgres/Knex',
  date: '2016-12-14',
  description: 'The description of the video...',
  url: 'https://www.youtube.com/watch?v=WYa47JkZH_U&t=552s',
  thumbnail: 'https://i.ytimg.com/vi/WYa47JkZH_U/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAXBaYYlSuEcmhpAH712ajkjMcOxA',
}, {
  type: 'milestone',
  name: 'Reached 500 subscribers!',
  date: '2018-03-17',
  description: 'CJ reached 500 subscribers!',
}, {
  type: 'milestone',
  name: 'Reached 50000 views!',
  date: '2018-05-05',
  description: 'CJ reached 50000 views!',
}, {
  type: 'milestone',
  name: 'Reached 1000 subscribers!',
  date: '2018-05-19',
  description: 'CJ reached 1000 subscribers!',
}, {
  type: 'milestone',
  name: 'Reached 2000 subscribers!',
  date: '2018-07-04',
  description: 'CJ reached 2000 subscribers!',
}, {
  type: 'milestone',
  name: 'Reached 100000 views!',
  date: '2018-07-15',
  description: 'CJ reached 100000 views!',
}, {
  type: 'milestone',
  name: 'Reached 3000 subscribers!',
  date: '2018-08-19',
  description: 'CJ reached 3000 subscribers!',
}, {
  type: 'milestone',
  name: 'Reached 4000 subscribers!',
  date: '2018-09-12',
  description: 'CJ reached 4000 subscribers!',
}, {
  type: 'milestone',
  name: 'Reached 5000 subscribers!',
  date: '2018-09-26',
  description: 'CJ reached 5000 subscribers!',
}, {
  type: 'milestone',
  name: 'Reached 6000 subscribers!',
  date: '2018-10-04',
  description: 'CJ reached 6000 subscribers!',
}, {
  type: 'milestone',
  name: 'Reached 7000 subscribers!',
  date: '2018-10-20',
  description: 'CJ reached 7000 subscribers!',
}, {
  type: 'milestone',
  name: 'Reached 200000 views!',
  date: '2018-10-21',
  description: 'CJ reached 200000 views!',
}, {
  type: 'milestone',
  name: 'Reached 8000 subscribers!',
  date: '2018-11-20',
  description: 'CJ reached 8000 subscribers!',
}, {
  type: 'milestone',
  name: 'Reached 9000 subscribers!',
  date: '2019-01-05',
  description: 'CJ reached 9000 subscribers!',
}, {
  type: 'milestone',
  name: 'Reached 300000 views!',
  date: '2019-01-21',
  description: 'CJ reached 300000 views!',
}, {
  type: 'milestone',
  name: 'Reached 10000 subscribers!',
  date: '2019-02-19',
  description: 'CJ reached 10000 subscribers!',
}, {
  type: 'milestone',
  name: 'Reached 400000 views!',
  date: '2019-03-30',
  description: 'CJ reached 400000 views!',
}, {
  type: 'milestone',
  name: 'Reached 11000 subscribers!',
  date: '2019-04-02',
  description: 'CJ reached 11000 subscribers!',
},
];

async function seedHistories() {
  await History.deleteMany({});
  await History.insertMany(historyData);
  // eslint-disable-next-line no-console
  console.log(colors.yellow('DB Seeded with History Data'));
}
module.exports = seedHistories;
