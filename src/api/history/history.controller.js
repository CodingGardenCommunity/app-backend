const data = {
  historyData: {
    events: [
      {
        _id: 0,
        type: 'milestone',
        data: {
          name: 'Coding Garden Created!',
          date: '2015-10-13',
          description: 'When the legend started...',
          url: null,
        },
      },
      {
        _id: 1,
        type: 'video',
        data: {
          name: 'First video!',
          videoID: 'WYa47JkZH_U&t=552s',
          title:
            'Build a Full Stack JavaScript CRUD App with Node/Express/Handlebars/Bootstrap/Postgres/Knex',
          date: '2016-12-14',
          description: 'The description of the video...',
          url: 'https://www.youtube.com/watch?v=WYa47JkZH_U&t=552s',
          thumbnail:
            'https://i.ytimg.com/vi/WYa47JkZH_U/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAXBaYYlSuEcmhpAH712ajkjMcOxA',
        },
      },
      {
        _id: 2,
        type: 'milestone',
        data: {
          name: 'Reached 500 subscribers!',
          date: '2018-03-17',
          description: 'CJ reached 500 subscribers!',
          url: null,
        },
      },
      {
        _id: 3,
        type: 'milestone',
        data: {
          name: 'Reached 50000 views!',
          date: '2018-05-05',
          description: 'CJ reached 50000 views!',
          url: null,
        },
      },
      {
        _id: 4,
        type: 'milestone',
        data: {
          name: 'Reached 1000 subscribers!',
          date: '2018-05-19',
          description: 'CJ reached 1000 subscribers!',
          url: null,
        },
      },
      {
        _id: 5,
        type: 'milestone',
        data: {
          name: 'Reached 2000 subscribers!',
          date: '2018-07-04',
          description: 'CJ reached 2000 subscribers!',
          url: null,
        },
      },
      {
        _id: 6,
        type: 'milestone',
        data: {
          name: 'Reached 100000 views!',
          date: '2018-07-15',
          description: 'CJ reached 100000 views!',
          url: null,
        },
      },
      {
        _id: 7,
        type: 'milestone',
        data: {
          name: 'Reached 3000 subscribers!',
          date: '2018-08-19',
          description: 'CJ reached 3000 subscribers!',
          url: null,
        },
      },
      {
        _id: 8,
        type: 'milestone',
        data: {
          name: 'Reached 4000 subscribers!',
          date: '2018-09-12',
          description: 'CJ reached 4000 subscribers!',
          url: null,
        },
      },
      {
        _id: 9,
        type: 'milestone',
        data: {
          name: 'Reached 5000 subscribers!',
          date: '2018-09-26',
          description: 'CJ reached 5000 subscribers!',
          url: null,
        },
      },
      {
        _id: 10,
        type: 'milestone',
        data: {
          name: 'Reached 6000 subscribers!',
          date: '2018-10-04',
          description: 'CJ reached 6000 subscribers!',
          url: null,
        },
      },
      {
        _id: 11,
        type: 'milestone',
        data: {
          name: 'Reached 7000 subscribers!',
          date: '2018-10-20',
          description: 'CJ reached 7000 subscribers!',
          url: null,
        },
      },
      {
        _id: 12,
        type: 'milestone',
        data: {
          name: 'Reached 200000 views!',
          date: '2018-10-21',
          description: 'CJ reached 200000 views!',
          url: null,
        },
      },
      {
        _id: 13,
        type: 'milestone',
        data: {
          name: 'Reached 8000 subscribers!',
          date: '2018-11-20',
          description: 'CJ reached 8000 subscribers!',
          url: null,
        },
      },
      {
        _id: 14,
        type: 'milestone',
        data: {
          name: 'Reached 9000 subscribers!',
          date: '2019-01-05',
          description: 'CJ reached 9000 subscribers!',
          url: null,
        },
      },
      {
        _id: 15,
        type: 'milestone',
        data: {
          name: 'Reached 300000 views!',
          date: '2019-01-21',
          description: 'CJ reached 300000 views!',
          url: null,
        },
      },
      {
        _id: 16,
        type: 'milestone',
        data: {
          name: 'Reached 10000 subscribers!',
          date: '2019-02-19',
          description: 'CJ reached 10000 subscribers!',
          url: null,
        },
      },
      {
        _id: 17,
        type: 'milestone',
        data: {
          name: 'Reached 400000 views!',
          date: '2019-03-30',
          description: 'CJ reached 400000 views!',
          url: null,
        },
      },
      {
        _id: 18,
        type: 'milestone',
        data: {
          name: 'Reached 11000 subscribers!',
          date: '2019-04-02',
          description: 'CJ reached 11000 subscribers!',
          url: null,
        },
      },
    ],
  },
};

function getHistory(req, res, next) {
  try {
    return res.json(data);
  } catch (e) {
    return next(e);
  }
}

module.exports = { getHistory };
