sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    info.startCountdown(3)
})
let pizza: Sprite = null
scene.setBackgroundColor(9)
let thekid = sprites.create(img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . . 5 5 . . . . . . . . . 
    . . . . . 5 5 . . . . . . . . . 
    . . . . . 5 5 . . . . . . . . . 
    . . . . . 5 5 . . . . . . . . . 
    . . . . . 5 5 . . . . . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(thekid)
pizza = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Food)
