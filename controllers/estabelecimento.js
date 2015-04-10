//controllers/estabelecimento.js


module.exports = function(app) {
	var Estabelecimento = app.model.Estabelecimento;
    var Erro = app.model.business.Erro;
 	var controller = {};

 	//Lista todos os estabelecimentos
  	controller.listarEstabelecimentos = function(req, res) {
      Estabelecimento.find().exec()
        .then(
          function(estabelecimentos){
            res.json(estabelecimentos);
          },
          function(erro){
            console.error(erro);
            res.status(500).json(erro);
          });

  	}; 

    //Buscar produtos por estabelecimentos proximos
    controller.listarEstabelecimentosProximos = function(req, res){
      var cidade = req.params.cidade;
      Estabelecimento.find().where("cidade").equals(cidade)
      .then(function(estabelecimentos){
        res.json(estabelecimentos);
      }, function(erro){
        console.error(erro);
        res.status(500).json(erro);

      });
    }

    //Busca ofertas por estabelecimento
    controller.buscarOfertasPorEstabelecimento = function(req, res){
      var nome = req.params.estabelecimento;
      Estabelecimento.find().select("ofertas").where("nome").equals(nome)
      .then(function(ofertas){
        res.json(ofertas);
      }, function(erro){
        console.error(erro);
        res.status(500).json(erro);

      });

    }

    //Busca ofertas por produto
    controller.buscarOfertasPorProduto = function(req, res){
      var produto = req.params.produto;
        Estabelecimento.find({"ofertas.produto" : produto}).select("nome ofertas").where("ofertas.produto").equals(produto).then(function(ofertas){
          var ofertasTratadas = [];
          console.log(ofertas);
          for(var i = 0; i < ofertas.length; i++){
              for(var j = 0; j < ofertas[i].ofertas.length; j++){
                if(ofertas[i].ofertas[j].produto === produto){
                  ofertasTratadas.push({"estabelecimento" : ofertas[i].nome, "produto" : ofertas[i].ofertas[j].produto, "valor" : ofertas[i].ofertas[j].valor});
                }
            }
          }
          res.json(ofertasTratadas);

        }, function(erro){
          res.status(500).json(erro);
        });
    }

    //Busca ofertas por Departamento e Estabelecimento
    controller.buscarOfertasPorDepartamentoEstabelecimento = function(req, res){
      
    }

     //Busca ofertas por Departamento
    controller.buscarOfertasPorDepartamento = function(req, res){
      
    }

    //Salvar um novo estabelecimento
    controller.salvarEstabelecimento = function(req, res){
       var estabelecimento = new Estabelecimento(req.body);
       estabelecimento.save(function(erro, estabelecimento){
        if(erro){
          res.status(500).json(erro);
          console.log(erro);
        }else{
          res.json(estabelecimento);
        }
       });
    }

    //Atualiza estabelecimento
    controller.atualizarEstabelecimento = function(req, res){

    }

    //Remover estabelecimento
    controller.removerEstabelecimento = function(req, res){

    }

    //Inserir ou atualizar oferta
    controller.inserirAtualizarOferta = function(req, res){
          var _id = req.body._idEstabelecimento;
       Estabelecimento.findById(_id).exec()
      .then(
        function(estabelecimento){
          estabelecimento.ofertas.push({ produto : req.body.produto, valor : req.body.valor});
          Estabelecimento.findByIdAndUpdate(_id, estabelecimento).exec()
          .then(function(estabelecimento){
            console.log("sucesso");
            res.json(estabelecimento);
          }, function(erro){
            console.error(erro);
            res.status(500).json(erro);
          });
        },
        function(erro){
          console.error(erro);
        });
    }

    //Remover oferta
    controller.removerOferta = function(req, res){

    }

  	return controller; 
  };
