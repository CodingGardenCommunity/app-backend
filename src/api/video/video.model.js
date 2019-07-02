const mongoose = require('mongoose');

const { Schema } = mongoose;

const VideoSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['milestone', 'video'],
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      default: null,
    },
    videoID: {
      type: String,
      default: null,
    },
    thumbnail: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

module.exports = mongoose.model('videos', VideoSchema);
