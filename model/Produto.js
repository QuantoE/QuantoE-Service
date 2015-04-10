// QuantoE-Service/Produto.js
var mongoose = require('mongoose');

module.exports = function(){
  var schema = mongoose.Schema({
    descricao : {type : String, required:true ,index:{unique:true}},
    departamento : {type : String},
    usuario : {type : String, required:true, default: 'Adm'},
    updated : {type : Date, default : Date.now}

  });
  return mongoose.model('Produto', schema);
};