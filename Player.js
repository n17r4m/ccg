
Player = function(id){
    
    var i;
    
    this.id = id;
    this.cards = [];
    this.deck = [];
    this.waste = [];
    this.active = [];
    this.skipTurns = 0;
    
    for(i = 0; i < 20; i++){
        this.deck.push(Cards.random());
    }
    
    this.deck.forEach(function(card){
        this.owner = this.id;
    })
    
    for (var i = 0; i < 5; i++){
        this.cards.push(this.deck.pop());
    }
    
    
}