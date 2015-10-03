if (Meteor.isClient) {
	
	Template.matchmaking.helpers({
		myGame: function(){
			console.info(this)
			if (_.where(this.players, {id: Meteor.userId()}).length > 0){
				return true
			}	else {
				return false
			}
		},
		openGame: function(){
			return Games.find({
				players: { $size: 1 }
			})
		},
		inGame: function(){
			return Games.find({
				players: { $size: 2 }
			})
		}
	})
	
	Template.play.helpers({
		isMe: function(){
			return this.id == Meteor.userId()
		}
	})
	
	
	Template.card.helpers({
		show: function(){
			return true;
			return this.shown || this.owner == Meteor.userId()
		}
	})
	
	Template.card.events({
		'click': function(e){
			if(this.owner == Meteor.userId()){
				// do something
			}
		}
	})
	
	
}

if (Meteor.isServer) {
	
	Meteor.methods({
		testRunFn: function(fn, cb){
			var t = fn;
			console.info(t);
			return t;
		}
	})
	
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
