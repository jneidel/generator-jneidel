const mongoose = require( "mongoose" );

const schema = new mongoose.Schema( {
  username: {
    type    : String,
    unique  : true,
    trim    : true,
    alias   : "name",
    required: "Please supply a username",
  },
  password: {
    type    : String,
    required: "Please supply a password",
  },
} );

module.exports = mongoose.model( "users", schema );
