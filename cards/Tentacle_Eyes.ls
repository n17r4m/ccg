@Tentacle_Eyes = class Tentacle_Eyes
    ->  @turns = 1
    action: ->
        player.cards.each (card) -> card.facedown!