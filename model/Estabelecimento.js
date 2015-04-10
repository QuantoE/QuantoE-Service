// QuantoE-Service/Estabelecimento.js
var mongoose = require('mongoose');

module.exports = function(){
  var schema = mongoose.Schema({
    nome : {type:String, required:true ,index:{unique:true}},
    cidade : {type:String, required:true },
    usuario : {type : String, required:true, default : 'Adm'},
    ofertas : [{ produto : {type : String}, valor : {type : Number}, updated : {type : Date, default : Date.now}
    , usuario : {type : String}}],
    updated : {type : Date, default : Date.now}


  });
  return mongoose.model('Estabelecimento', schema);
};