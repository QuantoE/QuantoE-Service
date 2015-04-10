//config/passport.js
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
// código anterior omitido
passport.use(new GitHubStrategy({ 
	clientID: '1c3189901de7826171a4', 
	clientSecret: 'e3ac741822851db046aafa8464f64e81e53089d2', 
	callbackURL: 'localhost:3000' }, 
	function(accessToken, refreshToken, profile, done) {

		Usuario.findOrCreate( { "login" : profile.username}
			, { "nome" : profile.username}
			, function(erro, usuario) { 
				if(erro) { 
					console.log(erro);
					 return done(erro); 
					} return done(null, usuario); 
				});
}));

/*
Chamado apenas UMA vez e recebe o usuário do nosso banco disponibilizado 
pelo callback da estratégia de autenticação. 
Realizará a serialização apenas do ObjectId do usuário na sessão.
*/
passport.serializeUser(function(usuario, done) { 
	done(null, usuario._id); 
});

passport.deserializeUser(function(id, done) {
 Usuario.findById(id).exec() .
 then(function(usuario) { 
 	done(null, usuario); 
 }); });
};