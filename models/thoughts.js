const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const moment = require("moment")

const formatDate = (todate) => moment(todate).format('MMMM Do YYYY, h:mm:ss a');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText:{
      type: String,
      required: true,
      max_length: 280,
      min_length: 1
    },
    createdAt: {
      type: Date,
      default: new Date.now,
      get: timeDate => formatDate(timeDate)
      
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function(){
  return this.reactions.length
})

const Thought = model('student', thoughtSchema);

module.exports = Thought;
