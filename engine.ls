
@Engine = class Engine
    # an instance of the game
    # exported to global (client + server) scope
    -> #conscructor
        #set up decks
    queue = [[], []]
    
@Card = class Card
    (owner, targets = [], fn = (i) -> i) ->
        
# card( Player [, Target [, {Variable} ]] ) --> {Phase: Play, Discard}
