// QuantoE-Service/model/Usuario.js
var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

module.exports = function(){

  var schema = mongoose.Schema({
    login : {type : String
      ,required:true
      ,index:{
        unique:true}
      },
    nome : {type : String
      ,required:true},
    updated : {type:Date, dafault: Date.now}

  });

   schema.plugin(findOrCreate);
   return mongoose.model('Usuario', schema);
};