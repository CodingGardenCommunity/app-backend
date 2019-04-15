module.exports = {
  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
  },
  database: {
    uri: process.env.NODE_ENV === 'production'
      ? process.env.MONGO_URI : 'mongodb://spiray:abc123abc123@ds139946.mlab.com:39946/codinggardencommunity',
  },
};
