Cards = new (function(){
    
    // Card Definitions
    
    var cards = {
        "Tentacle Eyes" : {
            description: "Turn your target's eyes into tentacles! They cannot see their cards.",
            action: function(){
                this.opponent.cards.forEach(function(card){
                    card.faceDown()
                });
            },
            turns: 2
        },
        "Ghoul Hands" : {
            description: "Target discards their hand",
            action: function(){
                this.opponent.cards.forEach(function(card){
                    card.discard()
                })
            },
            turns: 1
        },
        "Spontaneous Combustion" : {
            description: "Target skips a turn",
            action: function(){
                this.opponent.skipTurns += 1
            },
            turns: 1
        }
    }
    
    
    // Cards: functional setup
    
    cardFns = [
        function use(target){
            target.active.push(
                this.owner.cards.splice(this.owner.cards.indexOf(this), 1)
            )
        },
        function discard(){
            this.owner.waste.push(
                this.owner.cards.splice(this.owner.cards.indexOf(this), 1)
            )
        },
        function faceDown(){
            this.el.backgroundImage = "/card/back.jpg";
        },
        function faceUp(){
            this.el.backgroundImage = "/card/" + nameToImgFile(name);
        },
        function set(stats){
            for (var i in stats){
                this[i] = stats[i];
            }
        }
    ]
    
    var keys = Object.keys(cards);
    
    keys.forEach(function(name){
        var card = cards[name]
        card.name = name;
        card.owner = null;
        card.hidden = false;
        cardFns.forEach(function(fn){
           card[fn.name] = fn; 
        });
    })
    
    
    // Class functions
    
    this.random = function(){
        return clone(cards[ keys[ keys.length * Math.random() << 0 ] ]);
    }
    
    this.byName = function(name){
        return clone(cards[name]);
    }
    
    
    
})()


// Utility functions
function clone(card){
    return $.extend(true, {}, card); 
}

function nameToImgFile(name){
    return name.replace(" ", "_") + "jpg";
}


