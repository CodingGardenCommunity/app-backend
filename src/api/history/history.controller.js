const data = {
  historyData: {
    events: [
      {
        _id: 0,
        type: "milestone",
        data: {
          name: "Coding Garden Created!",
          date: "13/10/2015",
          description: "When the legend started...",
          url: null
        }
      },
      {
        _id: 1,
        type: "video",
        data: {
          name: "First video!",
          videoID: "WYa47JkZH_U&t=552s",
          title:
            "Build a Full Stack JavaScript CRUD App with Node/Express/Handlebars/Bootstrap/Postgres/Knex",
          date: "04/12/19",
          description: "The description of the video...",
          url: "https://www.youtube.com/watch?v=WYa47JkZH_U&t=552s",
          thumbnail:
            "https://i.ytimg.com/vi/WYa47JkZH_U/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAXBaYYlSuEcmhpAH712ajkjMcOxA"
        }
      },
      {
        _id: 2,
        type: "mileston",
        data: {
          name: "Reached 500 subscribers!",
          date: "17/03/2018",
          description: "CJ reached 500 subscribers!",
          url: null
        }
      },
      {
        _id: 2,
        type: "mileston",
        data: {
          name: "Reached 50000 views!",
          date: "05/05/2018",
          description: "CJ reached 50000 views!",
          url: null
        }
      },
      {
        _id: 2,
        type: "mileston",
        data: {
          name: "Reached 1000 subscribers!",
          date: "19/05/2018",
          description: "CJ reached 1000 subscribers!",
          url: null
        }
      },
      {
        _id: 2,
        type: "mileston",
        data: {
          name: "Reached 2000 subscribers!",
          date: "04/07/2018",
          description: "CJ reached 2000 subscribers!",
          url: null
        }
      },
      {
        _id: 3,
        type: "mileston",
        data: {
          name: "Reached 100000 views!",
          date: "15/07/2018",
          description: "CJ reached 100000 views!",
          url: null
        }
      },
      {
        _id: 2,
        type: "mileston",
        data: {
          name: "Reached 3000 subscribers!",
          date: "19/08/2018",
          description: "CJ reached 3000 subscribers!",
          url: null
        }
      },
      {
        _id: 2,
        type: "mileston",
        data: {
          name: "Reached 4000 subscribers!",
          date: "12/09/2018",
          description: "CJ reached 4000 subscribers!",
          url: null
        }
      },
      {
        _id: 2,
        type: "mileston",
        data: {
          name: "Reached 5000 subscribers!",
          date: "26/09/2018",
          description: "CJ reached 5000 subscribers!",
          url: null
        }
      },
      {
        _id: 2,
        type: "mileston",
        data: {
          name: "Reached 6000 subscribers!",
          date: "04/10/2018",
          description: "CJ reached 6000 subscribers!",
          url: null
        }
      },
      {
        _id: 2,
        type: "mileston",
        data: {
          name: "Reached 7000 subscribers!",
          date: "20/10/2018",
          description: "CJ reached 7000 subscribers!",
          url: null
        }
      },
      {
        _id: 4,
        type: "mileston",
        data: {
          name: "Reached 200000 views!",
          date: "21/10/2018",
          description: "CJ reached 200000 views!",
          url: null
        }
      },
      {
        _id: 2,
        type: "mileston",
        data: {
          name: "Reached 8000 subscribers!",
          date: "20/11/2018",
          description: "CJ reached 8000 subscribers!",
          url: null
        }
      },
      {
        _id: 2,
        type: "mileston",
        data: {
          name: "Reached 9000 subscribers!",
          date: "05/01/2019",
          description: "CJ reached 9000 subscribers!",
          url: null
        }
      },
      {
        _id: 4,
        type: "mileston",
        data: {
          name: "Reached 300000 views!",
          date: "21/01/2019",
          description: "CJ reached 300000 views!",
          url: null
        }
      },
      {
        _id: 2,
        type: "mileston",
        data: {
          name: "Reached 10000 subscribers!",
          date: "19/02/2019",
          description: "CJ reached 10000 subscribers!",
          url: null
        }
      },
      {
        _id: 4,
        type: "mileston",
        data: {
          name: "Reached 400000 views!",
          date: "30/03/2019",
          description: "CJ reached 400000 views!",
          url: null
        }
      },
      {
        _id: 2,
        type: "mileston",
        data: {
          name: "Reached 11000 subscribers!",
          date: "02/04/2019",
          description: "CJ reached 11000 subscribers!",
          url: null
        }
      }
    ]
  }
};

module.exports = function getHistory(req, res) {
  return res.json(data);
};
