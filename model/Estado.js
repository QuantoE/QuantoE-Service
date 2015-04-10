//models/Estado.js
var mongoose = require('mongoose');

module.exports = function(){
  var schema = mongoose.Schema({
    sigla : {type:String, required:true ,index:{unique:true}},
    nome : {type:String, required:true ,index:{unique:true}},
    cidades : [{ nome : {type : String}}]
  });
  return mongoose.model('Estado', schema);
};
