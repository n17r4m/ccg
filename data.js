/* 
	global Games _Games

*/

Games = new Meteor.Collection("games");

if (Meteor.isClient){
	_Games = Meteor.subscribe("games")
}

if (Meteor.isServer){
	
	Meteor.publish("games", function(){
		return Games.find({})
	})
	
}

