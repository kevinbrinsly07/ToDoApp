// This creates the MongoDB collection schema and export it for use in index.js.
const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
content: {
            type: String,
            required: true
      },
      date: {
            type: Date,
            default: Date.now
      }
})
module.exports = mongoose.model('TodoTask',todoTaskSchema);
