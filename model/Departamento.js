//model/Departamento.js
var mongoose = require('mongoose');

module.exports = function(){
  var schema = mongoose.Schema({
    descricao : {type : String, required:true ,index:{unique:true},
	usuario : {type : String, required:true, default:'Adm'},
	updated : {type : Date, default : Date.now}}
  });
  return mongoose.model('Departamento', schema);
};
