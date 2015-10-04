/* global Router */


Router.configure({
	layoutTemplate: 'main',
	loadingTemplate: 'loading'
});


Router.route('/', function () {
	this.render('hello');
});

Router.route('/new', function() {
	var id = Games.insert({
		players: [new Player(Meteor.userId())],
		started: new Date()
	});
	Router.go("/play/" + id);
})

Router.route("/play/:_id", {
	waitOn: function(){ return [_Games] },
	action: function(){
		var id = this.params._id;
		var game = Games.findOne(id);
		if (game && Meteor.user()){
			if(_.where(game.players, {id: Meteor.userId()}).length > 0){
				// resuming as player 1 or 2
			} else if (game.players.length == 1){
				// joining as player 2
				Games.update(id, {$push: {players: new Player(Meteor.userId())}});
			} else {
				// spectator
				Router.go("/spectate/" + id)
			}
			this.render("play", {
				data: game
			})
		} else {
			Router.go("/");
		}
	}
})

Router.route('/spectate/:_id', {
	waitOn: function(){ return [_Games] },
	action: function(){
		var id = this.params._id;
		var game = Games.findOne(id);
		if(game){
			this.render("spectate", {
				data: game
			})
		} else {
			Router.go("/");
		}
	}
})