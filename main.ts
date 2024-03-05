namespace SpriteKind {
    export const DartEnemy = SpriteKind.create()
    export const bubble = SpriteKind.create()
    export const playerdart = SpriteKind.create()
    export const eel = SpriteKind.create()
    export const left = SpriteKind.create()
    export const FinalBoss = SpriteKind.create()
    export const rock = SpriteKind.create()
    export const goblin = SpriteKind.create()
    export const powerup = SpriteKind.create()
    export const point = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < 2) {
        jump += 1
        mySprite.vy = -150
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d f . . . . . . . 
            8 8 8 8 8 8 f d f d e e e . . . 
            . . . 8 8 8 f f f d d e e . . . 
            . . . . 8 8 f f f d d e e . . . 
            . . . . 8 . . f f . . . . . . . 
            . . . . 8 . . d d . . . . . . . 
            . . . . 8 . . d d . . . . . . . 
            . . . . . . . . d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 8 8 8 8 . . . 
            . . . . . . . . 8 8 . . . . . . 
            . . . . . . . . 8 8 8 . . . . . 
            . . . . . . . . 8 8 8 8 8 8 . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . d f f f f f d d d . 
            . . . . . . d f f f f f d d d . 
            . . . . . . . . d d d . . . . . 
            . . . . . . . . e d d . . . . . 
            . . . . . . . . e e e . . . . . 
            . . . . . . . . e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . e d d . . . . . . . 
            . . . . . . d d d . . d . . . . 
            . . . . d f f f f f d d . . . . 
            . . . . d d d f f f d d . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . . 8 . 8 . . . . . . . 
            . . . . . . 8 . 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        300,
        false
        )
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (!(mySprite.isHittingTile(CollisionDirection.Top))) {
        jump = 0
    }
    if (!(player2.isHittingTile(CollisionDirection.Top))) {
        player2jump = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.eel, function (sprite, otherSprite) {
    sprite.follow(otherSprite, 1000)
    pause(5000)
    sprites.destroy(otherSprite, effects.fountain, 500)
    info.changeLifeBy(-1)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    bubble2 = sprites.create(img`
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . 9 9 1 1 1 1 1 1 1 9 9 . . . 
        . 9 1 1 . . . . . . . 1 1 9 . . 
        . 9 1 . . . . . . . . . 1 9 . . 
        9 1 . . . . . . . . . . . 1 9 . 
        9 1 . . . . . . . . . . . 1 9 . 
        9 1 . . . . . . . . . . . 1 9 . 
        9 1 . . . . . . . . . . . 1 9 . 
        9 1 . . . . . . . . . . . 1 9 . 
        9 1 . . . . . . . . . . . 1 9 . 
        9 1 . . . . . . . . . . . 1 9 . 
        . 9 1 . . . . . . . . . 1 9 . . 
        . 9 1 1 . . . . . . . 1 1 9 . . 
        . . 9 9 1 1 1 1 1 1 1 9 9 . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bubble)
    bubble2.setPosition(player2.x, player2.y)
    bubble2.changeScale(1.2, ScaleAnchor.Middle)
    bubble2.follow(player2, 400)
    pause(5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.bubble)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . 9 9 1 1 1 1 1 1 1 9 9 . . . 
        . 9 1 1 . . . . . . . 1 1 9 . . 
        . 9 1 . . . . . . . . . 1 9 . . 
        9 1 . . . . . . . . . . . 1 9 . 
        9 1 . . . . . . . . . . . 1 9 . 
        9 1 . . . . . . . . . . . 1 9 . 
        9 1 . . . . . . . . . . . 1 9 . 
        9 1 . . . . . . . . . . . 1 9 . 
        9 1 . . . . . . . . . . . 1 9 . 
        9 1 . . . . . . . . . . . 1 9 . 
        . 9 1 . . . . . . . . . 1 9 . . 
        . 9 1 1 . . . . . . . 1 1 9 . . 
        . . 9 9 1 1 1 1 1 1 1 9 9 . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bubble)
    mySprite2.setPosition(mySprite.x, mySprite.y)
    mySprite2.changeScale(1.2, ScaleAnchor.Middle)
    mySprite2.follow(mySprite, 400)
    pause(5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.bubble)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite4 == 5) {
        left2(true)
        leftDart.throwDart()
    }
    if (mySprite4 == 9) {
        left2(false)
        myDart.throwDart()
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (sprite42 == 3) {
        left3(true)
        player2leftdart.throwDart()
    }
    if (sprite42 == 2) {
        left3(false)
        player2dart.throwDart()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.warmRadial, 500)
    pause(500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.playerdart, SpriteKind.DartEnemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.warmRadial, 500)
    effects.clearParticles(otherSprite)
    pointspowerup = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 5 5 5 5 5 2 . . . . . 
        . . . . 2 5 f 5 f 5 2 . . . . . 
        . . . . 2 5 5 5 5 5 2 . . . . . 
        . . . . 2 5 5 f 5 5 2 . . . . . 
        . . . . 2 5 5 5 5 5 2 . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . 7 . 7 . 7 . . 7 7 . . . . 
        . . . 7 7 7 7 7 7 7 7 . . . . . 
        . . . . 7 . . 7 . . 7 . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . 9 1 1 1 1 1 1 1 9 . . . . 
        . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
        . . . 9 1 1 1 1 1 1 1 9 . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . 3 1 1 1 1 1 1 1 1 1 3 . . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . . 3 1 1 1 1 1 1 1 1 1 3 . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 1 1 1 1 1 1 1 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 1 1 1 1 1 1 1 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 1 1 1 1 1 1 1 2 . . . . 
        . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
        . . . 2 1 1 1 1 1 1 1 2 . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a a . . . . 
        . . . . a 1 1 1 1 1 1 1 a . . . 
        . . . a 1 1 1 1 1 1 1 1 1 a . . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . . a 1 1 1 1 1 1 1 1 1 a . . 
        . . . . a 1 1 1 1 1 1 1 a . . . 
        . . . . . a a a a a a a . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . 4 1 1 1 1 1 1 1 4 . . . . 
        . . 4 1 1 1 1 1 1 1 1 1 4 . . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . . 4 1 1 1 1 1 1 1 1 1 4 . . . 
        . . . 4 1 1 1 1 1 1 1 4 . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . 7 1 1 1 1 1 1 1 7 . . . 
        . . . 7 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . . 7 1 1 1 1 1 1 1 1 1 7 . . 
        . . . . 7 1 1 1 1 1 1 1 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
    otherSprite.setImage(pointspowerup[randint(0, pointspowerup.length - 1)])
    if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . 9 1 1 1 1 1 1 1 9 . . . . 
        . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
        . . . 9 1 1 1 1 1 1 1 9 . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . 9 1 1 1 1 1 1 1 9 . . . . 
            . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
            . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
            . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
            . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
            . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
            . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
            . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
            . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
            . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
            . . . 9 1 1 1 1 1 1 1 9 . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setVelocity(0, 120)
        otherSprite.setKind(SpriteKind.point)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . 3 1 1 1 1 1 1 1 1 1 3 . . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . . 3 1 1 1 1 1 1 1 1 1 3 . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 3 3 3 3 3 3 3 . . . . . 
            . . . 3 1 1 1 1 1 1 1 3 . . . . 
            . . 3 1 1 1 1 1 1 1 1 1 3 . . . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
            . . 3 1 1 1 1 1 1 1 1 1 3 . . . 
            . . . 3 1 1 1 1 1 1 1 3 . . . . 
            . . . . 3 3 3 3 3 3 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.point)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 1 1 1 1 1 1 1 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 1 1 1 1 1 1 1 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . 5 1 1 1 1 1 1 1 5 . . . . 
            . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
            . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
            . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
            . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
            . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
            . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
            . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
            . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
            . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
            . . . 5 1 1 1 1 1 1 1 5 . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.point)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 1 1 1 1 1 1 1 2 . . . . 
        . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
        . . . 2 1 1 1 1 1 1 1 2 . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 1 1 1 1 1 1 1 2 . . . . 
            . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
            . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
            . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
            . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
            . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
            . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
            . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
            . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
            . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
            . . . 2 1 1 1 1 1 1 1 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.point)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a a . . . . 
        . . . . a 1 1 1 1 1 1 1 a . . . 
        . . . a 1 1 1 1 1 1 1 1 1 a . . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . . a 1 1 1 1 1 1 1 1 1 a . . 
        . . . . a 1 1 1 1 1 1 1 a . . . 
        . . . . . a a a a a a a . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . a a a a a a a . . . . 
            . . . . a 1 1 1 1 1 1 1 a . . . 
            . . . a 1 1 1 1 1 1 1 1 1 a . . 
            . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
            . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
            . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
            . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
            . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
            . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
            . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
            . . . a 1 1 1 1 1 1 1 1 1 a . . 
            . . . . a 1 1 1 1 1 1 1 a . . . 
            . . . . . a a a a a a a . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.point)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . 4 1 1 1 1 1 1 1 4 . . . . 
        . . 4 1 1 1 1 1 1 1 1 1 4 . . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . . 4 1 1 1 1 1 1 1 1 1 4 . . . 
        . . . 4 1 1 1 1 1 1 1 4 . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 4 4 4 4 4 4 4 . . . . . 
            . . . 4 1 1 1 1 1 1 1 4 . . . . 
            . . 4 1 1 1 1 1 1 1 1 1 4 . . . 
            . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
            . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
            . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
            . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
            . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
            . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
            . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
            . . 4 1 1 1 1 1 1 1 1 1 4 . . . 
            . . . 4 1 1 1 1 1 1 1 4 . . . . 
            . . . . 4 4 4 4 4 4 4 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.point)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . 7 1 1 1 1 1 1 1 7 . . . 
        . . . 7 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . . 7 1 1 1 1 1 1 1 1 1 7 . . 
        . . . . 7 1 1 1 1 1 1 1 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 7 7 7 7 7 7 7 . . . . 
            . . . . 7 1 1 1 1 1 1 1 7 . . . 
            . . . 7 1 1 1 1 1 1 1 1 1 7 . . 
            . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
            . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
            . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
            . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
            . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
            . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
            . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
            . . . 7 1 1 1 1 1 1 1 1 1 7 . . 
            . . . . 7 1 1 1 1 1 1 1 7 . . . 
            . . . . . 7 7 7 7 7 7 7 . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.point)
    } else {
        if (otherSprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 5 5 5 5 5 2 . . . . . 
            . . . . 2 5 f 5 f 5 2 . . . . . 
            . . . . 2 5 5 5 5 5 2 . . . . . 
            . . . . 2 5 5 f 5 5 2 . . . . . 
            . . . . 2 5 5 5 5 5 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . 7 . 7 . 7 . . 7 7 . . . . 
            . . . 7 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 . . 7 . . 7 . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            `)) {
            pointspowerup.pop()
            otherSprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 2 2 2 2 2 . . . . . . 
                . . . . 2 5 5 5 5 5 2 . . . . . 
                . . . . 2 5 f 5 f 5 2 . . . . . 
                . . . . 2 5 5 5 5 5 2 . . . . . 
                . . . . 2 5 5 f 5 5 2 . . . . . 
                . . . . 2 5 5 5 5 5 2 . . . . . 
                . . . . . 2 2 2 2 2 . . . . . . 
                . . . . . . . 7 . . . . . . . . 
                . . . . . . . 7 . . . . . . . . 
                . . . 7 . 7 . 7 . . 7 7 . . . . 
                . . . 7 7 7 7 7 7 7 7 . . . . . 
                . . . . 7 . . 7 . . 7 . . . . . 
                . . . . . . . 7 . . . . . . . . 
                . . . . . . 7 7 7 . . . . . . . 
                . . . . . . 7 7 7 . . . . . . . 
                `)
            otherSprite.setKind(SpriteKind.powerup)
        }
    }
    otherSprite.setVelocity(0, 120)
    mySprite5 = 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite4 = 5
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . d d e . . . . . . . 
        . . . d . . d d d . . . . . . . 
        . . . d d f f f f f d . . . . . 
        . . . d d f f f d d d . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
function points (num: number) {
    info.changeScoreBy(num)
}
function left3 (bool: boolean) {
    if (bool) {
        player2leftdart = darts.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 7 5 5 5 7 7 7 . . . . . 
            . . . 7 5 1 1 1 1 1 5 5 7 7 7 . 
            . . . 7 1 1 1 1 1 1 1 1 1 1 1 . 
            . . . 7 5 1 1 1 1 1 5 5 7 7 7 . 
            . . . . 7 5 5 5 5 7 7 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.playerdart, player2.x, player2.y)
        player2leftdart.pow = 100
        player2leftdart.angle = 180
    } else {
        player2dart = darts.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 7 7 7 5 5 5 7 . . . . 
            . 7 7 7 5 5 1 1 1 1 1 5 7 . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 7 . . . 
            . 7 7 7 5 5 1 1 1 1 1 5 7 . . . 
            . . . . . 7 7 7 5 5 5 7 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.playerdart, player2.x, player2.y)
        player2dart.pow = 100
    }
}
function left2 (bool: boolean) {
    if (bool) {
        leftDart = darts.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 8 9 9 9 8 8 8 . . . . . 
            . . . 8 9 1 1 1 1 1 9 9 8 8 8 . 
            . . . 8 1 1 1 1 1 1 1 1 1 1 1 . 
            . . . 8 9 1 1 1 1 1 9 9 8 8 8 . 
            . . . . 8 9 9 9 9 8 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.playerdart, mySprite.x, mySprite.y)
        leftDart.pow = 100
        leftDart.angle = 180
    } else {
        myDart = darts.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 9 9 9 9 8 . . . . 
            . 8 8 8 9 9 1 1 1 1 1 9 8 . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 8 . . . 
            . 8 8 8 9 9 1 1 1 1 1 9 8 . . . 
            . . . . . 8 8 8 9 9 9 8 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.playerdart, mySprite.x, mySprite.y)
        myDart.pow = 100
    }
}
function Difficulty2 (mySprite: Sprite, list: any[], bool: boolean, num: number) {
    if (num >= 0) {
        for (let index = 0; index < num; index++) {
            for (let index = 0; index < 4; index++) {
                enemy1 = sprites.create(img`
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . 1 1 f 1 1 . . . . . 
                    . . . . . . 1 1 f 1 1 . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                    . . 1 . . . . . 1 . . . . . 1 . 
                    . . 1 . . 1 1 1 1 1 1 1 . . 1 . 
                    . . . . . . . . 1 . . . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . . . 1 . . . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . 1 . 1 . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    `, SpriteKind.DartEnemy)
                tiles.placeOnTile(enemy1, tiles.getTileLocation(randint(5, 80), 96))
                enemy1.follow(mySprite, randint(5, 80))
                enemy1.vy = 1000
            }
            for (let index = 0; index < num; index++) {
                enemy1 = sprites.create(img`
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . 1 1 f 1 1 . . . . . 
                    . . . . . . 1 1 f 1 1 . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                    . . 1 . . . . . 1 . . . . . 1 . 
                    . . 1 . . 1 1 1 1 1 1 1 . . 1 . 
                    . . . . . . . . 1 . . . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . . . 1 . . . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . 1 . 1 . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    `, SpriteKind.DartEnemy)
                tiles.placeOnTile(enemy1, tiles.getTileLocation(randint(5, 80), 86))
                enemy1.follow(mySprite, randint(5, 80))
                enemy1.vy = 1000
            }
            for (let index = 0; index < 4; index++) {
                mySprite3 = sprites.create(img`
                    ................................
                    ................................
                    ................................
                    ................................
                    ................................
                    ................................
                    .......................fffff....
                    ......ff7f............f77777f...
                    ....777.f77f....777ff.f77f17f...
                    ...ff......ff..ff...fff77ff7f...
                    ..77........f77f......f77777f...
                    .ff...................f77777f...
                    .......................fffff....
                    ................................
                    ................................
                    ................................
                    `, SpriteKind.eel)
                tiles.placeOnRandomTile(mySprite3, assets.tile`transparency16`)
                mySprite3.vy = 150
            }
            for (let index = 0; index < 6; index++) {
                for (let index = 0; index < num; index++) {
                    enemy2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . e e e . . . . . . . . . . 
                        . . e 7 7 e e . . . . . . 7 . 7 
                        . . 7 f 7 7 7 7 . 7 7 . . 7 7 7 
                        . 7 7 7 1 7 7 7 7 e e 7 . . 7 . 
                        . . 7 1 7 7 7 e e e e e . . 7 . 
                        . . 1 7 7 7 7 e e e e e 7 . 7 . 
                        . . . . . . . e e e e e e . 7 . 
                        . . 7 7 7 7 7 e e e e e e 7 7 . 
                        . . . 7 . . . e e e e e e . . . 
                        . . 7 7 . . . 7 7 7 7 7 7 . . . 
                        . . . . . . 7 7 7 7 7 7 7 7 . . 
                        . . . . . . 7 7 . . . . 7 7 . . 
                        . . . . . . f f . . . . f f . . 
                        . . . . . f f f . . . f f f . . 
                        `, SpriteKind.goblin)
                    tiles.placeOnRandomTile(enemy2, assets.tile`transparency16`)
                    enemy2.vy = 1000
                    enemy2.follow(mySprite, randint(5, 80))
                }
            }
        }
    }
    info.setLife(11)
    for (let index = 0; index < num; index++) {
        info.changeLifeBy(-1)
    }
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (player2jump < 2) {
        player2jump += 1
        player2.vy = -150
        animation.runImageAnimation(
        player2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d 7 . . . . . . . 
            8 8 8 8 8 8 7 d 7 d e e e . . . 
            . . . 8 8 8 7 7 7 d d e e . . . 
            . . . . 8 8 7 7 7 d d e e . . . 
            . . . . 8 . . 7 7 . . . . . . . 
            . . . . 8 . . d d . . . . . . . 
            . . . . 8 . . d d . . . . . . . 
            . . . . . . . . d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 8 8 8 8 . . . 
            . . . . . . . . 8 8 . . . . . . 
            . . . . . . . . 8 8 8 . . . . . 
            . . . . . . . . 8 8 8 8 8 8 . . 
            . . . . . . . . 7 7 7 . . . . . 
            . . . . . . d 7 7 7 7 7 d d d . 
            . . . . . . d 7 7 7 7 7 d d d . 
            . . . . . . . . d d d . . . . . 
            . . . . . . . . e d d . . . . . 
            . . . . . . . . e e e . . . . . 
            . . . . . . . . e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . e d d . . . . . . . 
            . . . . . . d d d . . d . . . . 
            . . . . d 7 7 7 7 7 d d . . . . 
            . . . . d d d 7 7 7 d d . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . . 8 . 8 . . . . . . . 
            . . . . . . 8 . 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        300,
        false
        )
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    mySprite.sayText("you have defeated me")
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite4 = 9
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e d d . . . . . . . 
        . . . . . . d d d . . d . . . . 
        . . . . d f f f f f d d . . . . 
        . . . . d d d f f f d d . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    sprite42 = 2
    player2.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e d d . . . . . . . 
        . . . . . . d d d . . d . . . . 
        . . . . d 7 7 7 7 7 d d . . . . 
        . . . . d d d 7 7 7 d d . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goblin, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
scene.onHitWall(SpriteKind.playerdart, function (sprite, location) {
    sprites.destroy(sprite, effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rock, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(rock2, effects.ashes, 500)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    sprite42 = 3
    player2.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . d d e . . . . . . . 
        . . . d . . d d d . . . . . . . 
        . . . d d 7 7 7 7 7 d . . . . . 
        . . . d d 7 7 7 d d d . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
function Difficulty (mySprite: Sprite, list: any[], bool: boolean, num: number) {
    if (num >= 0) {
        for (let index = 0; index < num; index++) {
            for (let index = 0; index < 4; index++) {
                enemy1 = sprites.create(img`
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . 1 1 f 1 1 . . . . . 
                    . . . . . . 1 1 f 1 1 . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                    . . 1 . . . . . 1 . . . . . 1 . 
                    . . 1 . . 1 1 1 1 1 1 1 . . 1 . 
                    . . . . . . . . 1 . . . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . . . 1 . . . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . 1 . 1 . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    `, SpriteKind.DartEnemy)
                tiles.placeOnTile(enemy1, tiles.getTileLocation(randint(5, 100), 96))
                enemy1.follow(mySprite, randint(5, 80))
                enemy1.vy = 1000
            }
            for (let index = 0; index < num; index++) {
                enemy1 = sprites.create(img`
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . 1 1 f 1 1 . . . . . 
                    . . . . . . 1 1 f 1 1 . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                    . . 1 . . . . . 1 . . . . . 1 . 
                    . . 1 . . 1 1 1 1 1 1 1 . . 1 . 
                    . . . . . . . . 1 . . . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . . . 1 . . . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . 1 . 1 . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    . . . . . . 1 . . . 1 . . . . . 
                    `, SpriteKind.DartEnemy)
                tiles.placeOnTile(enemy1, tiles.getTileLocation(randint(5, 100), 86))
                enemy1.follow(mySprite, randint(5, 80))
                enemy1.vy = 1000
            }
            for (let index = 0; index < 4; index++) {
                mySprite3 = sprites.create(img`
                    ................................
                    ................................
                    ................................
                    ................................
                    ................................
                    ................................
                    .......................fffff....
                    ......ff7f............f77777f...
                    ....777.f77f....777ff.f77f17f...
                    ...ff......ff..ff...fff77ff7f...
                    ..77........f77f......f77777f...
                    .ff...................f77777f...
                    .......................fffff....
                    ................................
                    ................................
                    ................................
                    `, SpriteKind.eel)
                tiles.placeOnRandomTile(mySprite3, assets.tile`transparency16`)
                mySprite3.vy = 150
            }
            for (let index = 0; index < 6; index++) {
                for (let index = 0; index < num; index++) {
                    enemy2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . e e e . . . . . . . . . . 
                        . . e 7 7 e e . . . . . . 7 . 7 
                        . . 7 f 7 7 7 7 . 7 7 . . 7 7 7 
                        . 7 7 7 1 7 7 7 7 e e 7 . . 7 . 
                        . . 7 1 7 7 7 e e e e e . . 7 . 
                        . . 1 7 7 7 7 e e e e e 7 . 7 . 
                        . . . . . . . e e e e e e . 7 . 
                        . . 7 7 7 7 7 e e e e e e 7 7 . 
                        . . . 7 . . . e e e e e e . . . 
                        . . 7 7 . . . 7 7 7 7 7 7 . . . 
                        . . . . . . 7 7 7 7 7 7 7 7 . . 
                        . . . . . . 7 7 . . . . 7 7 . . 
                        . . . . . . f f . . . . f f . . 
                        . . . . . f f f . . . f f f . . 
                        `, SpriteKind.goblin)
                    tiles.placeOnRandomTile(enemy2, assets.tile`transparency16`)
                    enemy2.vy = 1000
                    enemy2.follow(mySprite, randint(5, 100))
                }
            }
        }
    }
    info.setLife(11)
    for (let index = 0; index < num; index++) {
        info.changeLifeBy(-1)
    }
    if (num == 4) {
        scene.setBackgroundImage(img`
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555522222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222225555522222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222225555522222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222225555522222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222225555522222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555522222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555522222222222222222222222222222222222555555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555522222222222222222222222222222222222555555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555522222222222222222222222222222222222555555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555522222222222222222222222222222222222555555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222255555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555555555555555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555555555555555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555555555555555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555555555555555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222255555555555555555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222225555555222222222222222222225555555522555555555222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555522222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222225555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222555552222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            `)
    } else if (num == 3) {
        scene.setBackgroundImage(img`
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555599999999999999999995555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555559999999999999999999999955555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555599999999999999999999999999955555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555599999999999999999999999999955555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555599999999999999999999999999995555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555599999999555555555599999999999555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555599999555555555555555999999999955555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555559999999995555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555999999995555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555599999995555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555559999999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555559999999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555999999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555999999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555599999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555599999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555599999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555599999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555999999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555559999999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555599999999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555559999999999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555999999999999995555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555559999999999999999999999999995555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555559999999999999999999999999955555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555559999999999999999999999995555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555559999999999999999999999555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555559999999999999999999999999555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555599999999999999999999955555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555599999999999999955555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555999999999995555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555559999999999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555599999999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555559999999955555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555559999999955555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555999999955555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555599999955555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555599999955555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555559999955555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555559999955555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555559999955555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555559999955555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555599999955555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555999999955555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555559999999955555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555559999999999955555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555559999999999999999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555599999999999999999999999555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555999999999999999999999999999995555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555999999999999999999999999999955555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555999999999999999999999999555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555999999999999999999555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555999999999999555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            `)
    } else if (num == 2) {
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888887777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888777777777777777777778888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888877777777777777777777777778888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888887777777777777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888877777777777777777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888777777777777788888877777777777777788888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888887777777777788888888888877777777777777888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888877777777778888888888888888777777777777788888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888877777777788888888888888888887777777777778888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888777777778888888888888888888888877777777778888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888887777777788888888888888888888888888777777777888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888877777777888888888888888888888888888877777777888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888877777777888888888888888888888888888887777777888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888777777778888888888888888888888888888888777777788888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888777777788888888888888888888888888888888877777788888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888777777788888888888888888888888888888888877777788888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888777777888888888888888888888888888888888877777778888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888777777888888888888888888888888888888888887777777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777778888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777778888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777778888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777788888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777788888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888777777777888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888887777777777888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888777777777778888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888877777777777788888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888887777777777777777888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888887777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888777777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888777777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888877777777777777777777777778888888888888888888888888888888777777777777777888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777778888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            `)
    } else if (num == 1) {
        scene.setBackgroundImage(img`
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777444444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777444444444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777774444444444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777744444444444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777774444444444444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777744444444444444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777444444444444444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777444444444444444444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777774444444444447744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777444444444444477744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777774444444444444777744444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777444444444444477777744444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777744444444444477777777744444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777774444444444444777777777744444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777444444444444477777777777774444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777744444444444444777777777777774444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777444444444444477777777777777774444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777744444444444447777777777777777774444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777444444444444477777777777777777774444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777444444444447777777777777777777774444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777444444444777777777777777777777774444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777444444477777777777777777777777774444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777444447777777777777777777777777774444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777774444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777774444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777774444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777774444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777744444477777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777444444477777777777777444444444444444444447777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777744444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777
            7777777777777777777777777777777777777777777777444444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777
            7777777777777777777777777777777777777777777777444444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777
            7777777777777777777777777777777777777777777777444444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777
            7777777777777777777777777777777777777777777777444444444444444444444444444444444444444444444444444444444447777777777744444444444477777777777777777777777777777777
            7777777777777777777777777777777777777777777777444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777774444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
    } else if (num == 0) {
        scene.setBackgroundImage(img`
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444333333333333333333344444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444443333333333333333333333333334444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444443333333333333333333333333333333334444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444333333333333333333333333333333333333344444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444433333333333333333333333333333333333333333444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444443333333333333333333333333333333333333333333334444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444333333333333333333333333333333333333333333333333344444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444443333333333333333333333333333333333333333333333333334444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444333333333333333333333333333333333333333333333333333333344444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444443333333333333333333333333333333333333333333333333333333334444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444433333333333333333333333333333333333333333333333333333333333444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444333333333333333333333333333333333333333333333333333333333333344444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444443333333333333333333333333333333333333333333333333333333333333334444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444433333333333333333333333333333333333333333333333333333333333333333444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444333333333333333333333333444444444444444443333333333333333333333333344444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444443333333333333333333333444444444444444444444443333333333333333333333334444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444433333333333333333333344444444444444444444444444433333333333333333333333444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444333333333333333333334444444444444444444444444444444333333333333333333333344444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444333333333333333333444444444444444444444444444444444443333333333333333333344444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444443333333333333333334444444444444444444444444444444444444333333333333333333334444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444433333333333333333444444444444444444444444444444444444444443333333333333333333444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444433333333333333334444444444444444444444444444444444444444444333333333333333333444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444333333333333333344444444444444444444444444444444444444444444433333333333333333344444444444444444444444444444444444444444
            4444444444444444444444444444444444444444333333333333333444444444444444444444444444444444444444444444443333333333333333344444444444444444444444444444444444444444
            4444444444444444444444444444444444444443333333333333334444444444444444444444444444444444444444444444444333333333333333334444444444444444444444444444444444444444
            4444444444444444444444444444444444444443333333333333344444444444444444444444444444444444444444444444444433333333333333334444444444444444444444444444444444444444
            4444444444444444444444444444444444444433333333333333344444444444444444444444444444444444444444444444444433333333333333333444444444444444444444444444444444444444
            4444444444444444444444444444444444444433333333333333444444444444444444444444444444444444444444444444444443333333333333333444444444444444444444444444444444444444
            4444444444444444444444444444444444444333333333333334444444444444444444444444444444444444444444444444444444333333333333333344444444444444444444444444444444444444
            4444444444444444444444444444444444444333333333333334444444444444444444444444444444444444444444444444444444333333333333333344444444444444444444444444444444444444
            4444444444444444444444444444444444444333333333333344444444444444444444444444444444444444444444444444444444433333333333333344444444444444444444444444444444444444
            4444444444444444444444444444444444443333333333333344444444444444444444444444444444444444444444444444444444433333333333333334444444444444444444444444444444444444
            4444444444444444444444444444444444443333333333333444444444444444444444444444444444444444444444444444444444443333333333333334444444444444444444444444444444444444
            4444444444444444444444444444444444443333333333333444444444444444444444444444444444444444444444444444444444443333333333333334444444444444444444444444444444444444
            4444444444444444444444444444444444443333333333334444444444444444444444444444444444444444444444444444444444444333333333333334444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333334444444444444444444444444444444444444444444444444444444444444333333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333334444444444444444444444444444444444444444444444444444444444444333333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444433333333333344444444444444444444444444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444
            4444444444444444444444444444444444443333333333334444444444444444444444444444444444444444444444444444444444444333333333333334444444444444444444444444444444444444
            4444444444444444444444444444444444443333333333334444444444444444444444444444444444444444444444444444444444444333333333333334444444444444444444444444444444444444
            4444444444444444444444444444444444443333333333334444444444444444444444444444444444444444444444444444444444444333333333333334444444444444444444444444444444444444
            4444444444444444444444444444444444443333333333333444444444444444444444444444444444444444444444444444444444443333333333333334444444444444444444444444444444444444
            4444444444444444444444444444444444444333333333333444444444444444444444444444444444444444444444444444444444443333333333333344444444444444444444444444444444444444
            4444444444444444444444444444444444444333333333333344444444444444444444444444444444444444444444444444444444433333333333333344444444444444444444444444444444444444
            4444444444444444444444444444444444444333333333333344444444444444444444444444444444444444444444444444444444433333333333333344444444444444444444444444444444444444
            4444444444444444444444444444444444444433333333333334444444444444444444444444444444444444444444444444444444333333333333333444444444444444444444444444444444444444
            4444444444444444444444444444444444444433333333333334444444444444444444444444444444444444444444444444444444333333333333333444444444444444444444444444444444444444
            4444444444444444444444444444444444444443333333333333444444444444444444444444444444444444444444444444444443333333333333334444444444444444444444444444444444444444
            4444444444444444444444444444444444444443333333333333344444444444444444444444444444444444444444444444444433333333333333334444444444444444444444444444444444444444
            4444444444444444444444444444444444444444333333333333344444444444444444444444444444444444444444444444444433333333333333344444444444444444444444444444444444444444
            4444444444444444444444444444444444444444333333333333334444444444444444444444444444444444444444444444444333333333333333344444444444444444444444444444444444444444
            4444444444444444444444444444444444444444433333333333333444444444444444444444444444444444444444444444443333333333333333444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444433333333333333344444444444444444444444444444444444444444444433333333333333333444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444443333333333333334444444444444444444444444444444444444444444333333333333333334444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444333333333333333444444444444444444444444444444444444444443333333333333333344444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444333333333333333334444444444444444444444444444444444444333333333333333333344444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444433333333333333333444444444444444444444444444444444443333333333333333333444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444443333333333333333334444444444444444444444444444444333333333333333333334444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444333333333333333333344444444444444444444444444433333333333333333333344444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444433333333333333333333444444444444444444444443333333333333333333333444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444443333333333333333333333444444444444444443333333333333333333333334444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444333333333333333333333333333333333333333333333333333333333333344444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444433333333333333333333333333333333333333333333333333333333333444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444443333333333333333333333333333333333333333333333333333333334444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444333333333333333333333333333333333333333333333333333333344444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444443333333333333333333333333333333333333333333333333334444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444333333333333333333333333333333333333333333333333344444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444443333333333333333333333333333333333333333333334444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444433333333333333333333333333333333333333333444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444333333333333333333333333333333333333344444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444443333333333333333333333333333333334444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444443333333333333333333333333334444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444333333333333333333344444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            `)
    } else if (num == 5) {
        scene.setBackgroundImage(img`
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333222222222222222222223333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333222222222222222222222222222222223333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333332222222222222222222222222222222222222222222222223333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333322222222222222222222222222222222222222222222222223333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333322222222222222222222222222222222222222222222222223333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333322222222222222222222222222222222233333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333322222222222222222222233333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333322222333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333322222333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333222222333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333222222333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333332222222333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333332222222333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333332222223333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333332222223333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333332222233333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333332222233333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333332222233333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333332222233333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333332222233333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333332222233333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333332222233333333332222222222222222222333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222233333322222222222222222222222222223333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222233322222222222222222222222222222222233333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222233222222222222222222222222222222222222233333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222232222222222222222222222222222222222222222333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222322222222222222333333333332222222222222222233333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222222222222223333333333333333333222222222222233333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222222222222333333333333333333333333222222222222333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222222222233333333333333333333333333333222222222233333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222222222333333333333333333333333333333322222222223333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222222223333333333333333333333333333333332222222223333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222222233333333333333333333333333333333333222222223333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222222233333333333333333333333333333333333332222222333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222222333333333333333333333333333333333333332222222233333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222222333333333333333333333333333333333333333222222233333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222223333333333333333333333333333333333333333222222233333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222233333333333333333333333333333333333333333322222233333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222333333333333333333333333333333333333333333322222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222333333333333333333333333333333333333333333332222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333322222333333333333333333333333333333333333333333332222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333332222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333332222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333332222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333322222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333222222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333222222223333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333322222233333333333333333333333333333333322222222233333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333322222233333333333333333333333333333333222222222333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333322222223333333333333333333333333333333222222223333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333322222223333333333333333333333333333332222222223333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333322222222333333333333333333333333333322222222233333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333332222222333333333333333333333333333222222222333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333222222223333333333333333333333332222222223333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333222222222333333333333333333333222222222233333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333322222222223333333333333333322222222222333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333322222222222233333333333322222222222222333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333332222222222222233333322222222222222233333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333322222222222222222222222222222222333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333332222222222222222222222222222233333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333322222222222222222222222222333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333222222222222222222223333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333222222222222223333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            `)
    } else if (num == 6) {
        scene.setBackgroundImage(img`
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbebbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
    } else if (num == 7) {
        scene.setBackgroundImage(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            `)
    } else if (num == 8) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555fffffffffff5555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff555555555555555fffffffffffffffff5555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff555555555555555fffffffffffffffffff5555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff555555555555555fffffffffffffffffffff5555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff55555555555555fffffffffffffffffffffff555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffff55555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffff55555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffff5555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffff5555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffff55555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffff55555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffff55555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffff55555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffff55555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff55555555555555fffffffffffffffffffffffff555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fffffffffffffffffffffff5555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff555555555555555fffffffffffffffffffff5555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff5555555555555555fffffffffffffffffff55555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff55555555555555555fffffffffffffffff555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555fffffffffff55555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555fffffffffff55555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff5555555555555555fffffffffffffffff555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff555555555555555fffffffffffffffffff55555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fffffffffffffffffffff55555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff555555555555555fffffffffffffffffffffff55555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff55555555555555fffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffff555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffff555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffff555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffff555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffff555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffff555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffff555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffff555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffff555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffff555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffff555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffff555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffff555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffff555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffff555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff55555555555555fffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff55555555555555fffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff55555555555555fffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff555555555555555fffffffffffffffffffffffffff55555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff555555555555555fffffffffffffffffffffffff55555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff5555555555555555fffffffffffffffffffffff555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff55555555555555555fffffffffffffffffffff5555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff55555555555555555fffffffffffffffffff5555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff555555555555555555fffffffffffffffff55555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff555555555555555555555fffffffffff55555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
    } else {
        scene.setBackgroundImage(img`
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddd2222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddd222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd22222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd22222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd22222222222222dddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddd2222222222222dddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddd22222222222dddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd222222222ddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd22222222dddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd222222dddddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd222222dddddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd22222ddddddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd22222ddddddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd22222ddddddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd22222ddddddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd22222ddddddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd22222ddddddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd222222dddddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd222222dddddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd2222222ddddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd2222222ddddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddd2222222ddddddddddd2222222222222222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddd22222222dddddddddd22222222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd22222222ddddddddd22222222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd222222222dddddddd22222222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd2222222222dddddd22222222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd22222222222dddddddddddddddddddddd22222ddddd22222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd2222222222ddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd2222222222dddddddddddddddddddd22222dddddddddddddddddddddddddd222222222222dddddddddddddddddddddddddd2222222222dddddddddd
            dddddddddddddddddddddddddddddddddddddddddd2222222222ddddddddddddddddddd22222dddddddddddddddddddddddd22222222222222222222ddddddddddddddddddd2222222222222dddddddd
            dddddddddddddddddddddddddddddddddddddddddddd22222222ddddddddddddddddddd22222dddddddddddddddddddddd22222222222222222222222ddddddddddddddd222222222222222222dddddd
            ddddddddddddddddddddddddddddddddddddddddddddd22222222dddddddddddddddddd22222ddddddddddddddddddddd2222222222222222222222222dddddddddddddd2222222222222222222ddddd
            dddddddddddddddddddddddddddddddddddddddddddddd22222222ddddddddddddddddd22222ddddddddddddddddddd2222222222222222222222222222ddddddddddddd222222222222222222222ddd
            ddddddddddddddddddddddddddddddddddddddddddddddd2222222ddddddddddddddddd22222dddddddddddddddddd22222222222222222222222222222ddddddddddddd222222222d222222222222dd
            ddddddddddddddddddddddddddddddddddddddddddddddd2222222ddddddddddddddddd22222ddddddddddddddddd22222222222dd22222ddddd2222222ddddddddddddd2222222ddddd22222222222d
            dddddddddddddddddddddddddddddddddddddddddddddddd2222222ddddddddddddddd222222ddddddddddddddddd222222222ddddddddddddddd2222222ddddddddddddd222222ddddddd222222222d
            dddddddddddddddddddddddddddddddddddddddddddddddd2222222ddddddddddddddd222222dddddddddddddddd222222222ddddddddddddddddd222222ddddddddddddd222222dddddddd222222222
            ddddddddddddddddddddddddddddddddddddddddddddddddd222222ddddddddddddddd222222dddddddddddddddd2222222ddddddddddddddddddd222222ddddddddddddd222222dddddddddd2222222
            ddddddddddddddddddddddddddddddddddddddddddddddddd2222222dddddddddddddd222222dddddddddddddddd222222dddddddddddddddddddd222222ddddddddddddd222222dddddddddd2222222
            dddddddddddddddddddddddddddddddddddddddddddddddddd222222dddddddddddddd22222ddddddddddddddddd222222dddddddddddddddddddd222222ddddddddddddd2222222dddddddddd222222
            dddddddddddddddddddddddddddddddddddddddddddddddddd222222dddddddddddddd22222ddddddddddddddddd222222ddddddddddddddddddddd22222ddddddddddddd2222222dddddddddd222222
            dddddddddddddddddddddddddddddddddddddddddddddddddd222222dddddddddddddd22222ddddddddddddddddd22222dddddddddddddddddddddd22222dddddddddddddd222222dddddddddd222222
            dddddddddddddddddddddddddddddddddddddddddddddddddd222222dddddddddddddd22222dddddddddddddddd222222dddddddddddddddddddddd22222dddddddddddddd222222dddddddd22222222
            ddddddddddddddddddddddddddddddddddddddddddddddddddd22222dddddddddddddd22222dddddddddddddddd222222dddddddddddddddddddddd22222dddddddddddddd2222222ddddd2222222222
            dddddddddddddddddddddddddddddddddddddddddddddddddd222222dddddddddddddd22222dddddddddddddddd222222dddddddddddddddddddddd22222dddddddddddddd2222222dd2222222222222
            dddddddddddddddddddddddddddddddddddddddddddddddddd222222dddddddddddddd22222dddddddddddddddd222222ddddddddddddddddddddd222222dddddddddddddd2222222222222222222222
            ddddddddddddddddddddddddddddddddddddddddddddddddd2222222dddddddddddddd22222dddddddddddddddd22222dddddddddddddddddddddd222222ddddddddddddddd22222222222222222222d
            ddddddddddddddddddddddddddddddddddddddddddddddddd2222222dddddddddddddd22222dddddddddddddddd22222dddddddddddddddddddddd222222ddddddddddddddd22222222222222222dddd
            ddddddddddddddddddddddddddddddddddddddddddddddddd222222ddddddddddddddd22222dddddddddddddddd22222dddddddddddddddddddddd222222ddddddddddddddd222222222222222dddddd
            dddddddddddddddddddddddddddddddddddddddddddddddd2222222ddddddddddddddd22222dddddddddddddddd22222dddddddddddddddddddddd22222ddddddddddddddddd22222222222ddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddd22222222dddddddddddddddd22222dddddddddddddddd22222ddddddddddddddddddddd222222ddddddddddddddddd222222dddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddd22222222dddddddddddddddd22222dddddddddddddddd22222ddddddddddddddddddddd222222ddddddddddddddddd222222dddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddd222222222dddddddddddddddd22222dddddddddddddddd22222ddddddddddddddddddddd222222ddddddddddddddddd222222dddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd222222222222ddddddddddddddddd22222dddddddddddddddd222222dddddddddddddddddddd222222ddddddddddddddddd222222dddddddddddddd
            ddddddddddddddddddddddddddddddddddddd222222222222222dddddddddddddddddd22222dddddddddddddddd2222222dddddddddddddddddd222222dddddddddddddddddd2222222ddddddddddddd
            dddddddddddddddddddddddddddddddd2222222222222222222ddddddddddddddddddd22222dddddddddddddddd2222222ddddddddddddddddd2222222ddddddddddddddddddd222222ddddddddddddd
            dddddddddddddddddddddddddddddddd222222222222222222dddddddddddddddddddd22222dddddddddddddddd2222222ddddddddddddddddd2222222ddddddddddddddddddd222222ddddddddddddd
            dddddddddddddddddddddddddddddddd22222222222222222ddddddddddddddddddddd22222ddddddddddddddddd2222222dddddddddddddddd2222222ddddddddddddddddddd222222ddddddddddddd
            dddddddddddddddddddddddddddddddd2222222222222ddddddddddddddddddddddddd22222dddddddddddddddddd2222222dddddddddddddd2222222dddddddddddddddddddd222222ddddddddddddd
            dddddddddddddddddddddddddddddddd2222222222dddddddddddddddddddddddddddd22222dddddddddddddddddd22222222dddddddddddd2222222ddddddddddddddddddddd222222ddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22222dddddddddddddddddd22222222ddddddddddd22222222ddddddddddddddddddddd2222222dddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222ddddddd2222222222ddddddddddddddddddddd2222222dddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222dddddddddddddddddddddd2222222dddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222222222222222222ddddddddddddddddddddddd2222222dddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222222222222222222ddddddddddddddddddddddd2222222dddddddddddd
            ddddddddddddddddddddd222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222222222222222ddddddddddddddddddddddddd2222222dddddddddddd
            ddddddddddddddddddddd22222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222ddddddddddddddddddddddddddd2222222dddddddddddd
            dddddddddddddddd2222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222dddddddddddd
            dddddddddddddddd2222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222dddddddddddd
            dddddddddddddddd2222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222ddddddddddddd
            dddddddddddddddd2222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222ddddddddddddd
            dddddddddddddddd222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222ddddddddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd22222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222ddddddddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd22222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222ddddddddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd22222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222ddddddddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd22222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd22222ddddddddddd222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd22222dddddddddd22222222222ddddd222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd22222dddddddddd22222222222ddd222222222ddddddddddddddddd22222ddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd2222222222dddd222222222222d222222222222dddddddddddddddd222222dddd22222ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd2222222222dddd22222222222222222222222222ddddddddddddddd2222222d2222222ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd22222222222ddd22222222222222222222222222ddddddddddddddd2222222d2222222ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd22222222222dd222222222222222222222222222ddddddddddddddd2222222222222222222222dddddddddddddddddddddddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd22222222222dd22222222222222222222d222222ddddddddddddddd22222222222222222222222222ddddd22222dd22222ddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd22222222222d2222222222222222222ddd2222222dddddddddddddddd222222222222222222222222ddddd22222dd22222ddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd22222222222d22222222222222222222222222222dddddddddddddddd222222222222222222222222ddddd22222dd22222ddddddd
            ddddddddddddddddddddddd22222ddddddddddddddddddddddddddd22222222222222222222222dd2222222222222222ddddddddddddddddd22222222222222222222222ddddd222222d22222ddddddd
            ddddddddddddddddd22222222222222222ddddddddddddddddddddd222222222222222222222dddd2222222222222222ddddddddddddddddd22222222222222222222222ddddd222222222222ddddddd
            ddddddddddddddddd22222222222222222ddddddddddddddddddddd22222222222222222ddddddddd222222222222222ddddddddddddddddd22222222d22222222222222ddddd222222222222ddddddd
            ddddddddddddddddd22222222222222222ddddddddddddddddddddd22222222222222222ddddddddd222222222222222ddddddddddddddd222222222dd22222222222222ddddd222222222222ddddddd
            ddddddddddddddddd22222222222222222ddddddddddddddddddddd22222222222222222222222ddddd2222222222222ddddddddddddddd22222222ddd22222222222222dddddd22222222222ddddddd
            ddddddddddddddddd22222222222222222dddddddddddddddddddddddd22222222222222222222dddddddd2222222222ddddddddddddddd2222222dddd22222222222222dddddd22222222222ddddddd
            dddddddddddddddddddddd222222ddddddddddddddddddddddddddddddddddddd2222222222222dddddddd2222222222ddddddddddddddd2222222dddd22222222222ddddddddd2222222222dddddddd
            `)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.point, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . 9 1 1 1 1 1 1 1 9 . . . . 
        . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
        . . . 9 1 1 1 1 1 1 1 9 . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        info.changeScoreBy(1)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . 3 1 1 1 1 1 1 1 1 1 3 . . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . . 3 1 1 1 1 1 1 1 1 1 3 . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        info.changeScoreBy(2)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 1 1 1 1 1 1 1 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 1 1 1 1 1 1 1 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        info.changeScoreBy(3)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 1 1 1 1 1 1 1 2 . . . . 
        . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
        . . . 2 1 1 1 1 1 1 1 2 . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        info.changeScoreBy(4)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a a . . . . 
        . . . . a 1 1 1 1 1 1 1 a . . . 
        . . . a 1 1 1 1 1 1 1 1 1 a . . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . . a 1 1 1 1 1 1 1 1 1 a . . 
        . . . . a 1 1 1 1 1 1 1 a . . . 
        . . . . . a a a a a a a . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        info.changeScoreBy(5)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . 4 1 1 1 1 1 1 1 4 . . . . 
        . . 4 1 1 1 1 1 1 1 1 1 4 . . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . . 4 1 1 1 1 1 1 1 1 1 4 . . . 
        . . . 4 1 1 1 1 1 1 1 4 . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        info.changeScoreBy(6)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . 7 1 1 1 1 1 1 1 7 . . . 
        . . . 7 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . . 7 1 1 1 1 1 1 1 1 1 7 . . 
        . . . . 7 1 1 1 1 1 1 1 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        info.changeScoreBy(7)
    } else {
        if (otherSprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 5 5 5 5 5 2 . . . . . 
            . . . . 2 5 f 5 f 5 2 . . . . . 
            . . . . 2 5 5 5 5 5 2 . . . . . 
            . . . . 2 5 5 f 5 5 2 . . . . . 
            . . . . 2 5 5 5 5 5 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . 7 . 7 . 7 . . 7 7 . . . . 
            . . . 7 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 . . 7 . . 7 . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            `)) {
            info.changeScoreBy(20)
        }
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(sprite, effects.disintegrate, 100)
})
scene.onHitWall(SpriteKind.rock, function (sprite, location) {
    sprites.destroy(sprite, effects.ashes, 100)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    mySprite.sayText("hurray")
    player2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e d d . . . . . . . 
        . . . . . . d d d . . d . . . . 
        . . . . d 7 7 7 7 7 d d . . . . 
        . . . . d d d 7 7 7 d d . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(player2, tiles.getTileLocation(0, 97))
    player2.setScale(2, ScaleAnchor.Middle)
    player2.ay = 300
    controller.player2.moveSprite(player2, 100, 0)
    info.setScore(0)
    player2jump = 0
    Difficulty2(player2, finalBossMove, true, difficulty)
})
function FinalBoss1 (list: number, finalBoss: Sprite, Distance: number, Angle: number, Difficulty3: number, bool: boolean) {
    if (list == 4) {
        animation.runImageAnimation(
        final_boss,
        [img`
            ........777777777...............
            .......7eee777eee7..............
            ......77727eee72777.............
            ......77777eee77777.............
            ......777777e777777.............
            ......777777e777777.............
            ......7777777777777.............
            ......7777777777777.............
            ......777fffffff777.............
            .......77115111177..............
            ........771777177...............
            .........7777777................
            .....7777..777..7777............
            ....77777777777777777...........
            ....77777777777777777...........
            ..77777777777777777777777.......
            ..777777777777777777777777......
            ..77....7eeeeeee7777777777......
            ..77....777eee7777777.77777.....
            ..77....77eeeee77777....77777...
            .7777...7777e7777........77777..
            ..77....777eee777..........777..
            ...7....7777e7777..........777..
            ........777777777..........7.7..
            .......fffffffffff...........7..
            ........fffffffff...............
            ........fffffffff...............
            ........fffffffff...............
            .......777.....777..............
            .......777.....777..............
            .......777.....777..............
            ......7777.....7777.............
            `],
        2000,
        false
        )
        if (Distance <= 40) {
            info.changeLifeBy(-12)
        }
    } else if (list == 0) {
        final_boss.sayText("You can't defeat me!!")
    } else if (list == 1) {
        animation.runImageAnimation(
        final_boss,
        [img`
            ............777777777...........
            ...........7eee777eee7..........
            ..........77727eee72777.........
            ..........77777eee77777.........
            ..........777777e777777.........
            ..........777777e777777.........
            ..........7777777777777.........
            ..........7777777777777.........
            ..........777fffffff777.........
            ...........77115111177..........
            ............771777177...........
            .............7777777............
            .........7777..777..7777........
            ........77777777777777777.......
            ........77777777777777777.......
            ......777777777777777777777.....
            ......777777777777777777777.....
            ......77....7eeeeeee7....77.....
            ......77....777eee777....77.....
            ......77....77eeeee77....77.....
            .....7777...7777e7777...7777....
            ......77....777eee777....77.....
            .......7....7777e7777....7......
            ............777777777...........
            ...........fffffffffff..........
            ............fffffffff...........
            ............fffffffff...........
            ............fffffffff...........
            ...........777.....777..........
            ...........777.....777..........
            ...........777.....777..........
            ..........7777.....7777.........
            `,img`
            ............777777777...........
            ...........7eee777eee7..........
            ..........77727eee72777.........
            ..........77777eee77777.........
            ..........777777e777777.........
            ..........777777e777777.........
            ..........7777777777777.........
            ..........7777777777777.........
            ..........777fffffff777.........
            ...........77115111177..........
            ............771777177...........
            .............7777777............
            .........7777..777..7777........
            ........77777777777777777.......
            ........77777777777777777.......
            ......777777777777777777777.....
            ......777777777777777777777.....
            ......77....7eeeeeee7....77.....
            ......77....777eee777....77.....
            ......77....77eeeee77....77.....
            .....7777...7777e7777...7777....
            ......77....777eee777....77.....
            .......7....7777e7777....7......
            ............777777777...........
            ...........fffffffffff..........
            ..........7777fffffff...........
            ..........7777fffffff...........
            ..........7777fffffff...........
            ..........7777.....777..........
            .........77777.....777..........
            ...................777..........
            ...................7777.........
            `,img`
            ............777777777...........
            ...........7eee777eee7..........
            ..........77727eee72777.........
            ..........77777eee77777.........
            ..........777777e777777.........
            ..........777777e777777.........
            ..........7777777777777.........
            ..........7777777777777.........
            ..........777fffffff777.........
            ...........77115111177..........
            ............771777177...........
            .............7777777............
            .........7777..777..7777........
            ........77777777777777777.......
            ........77777777777777777.......
            ......777777777777777777777.....
            ......777777777777777777777.....
            ......77....7eeeeeee7....77.....
            ......77....777eee777....77.....
            ......77....77eeeee77....77.....
            .....7777...7777e7777...7777....
            ......77....777eee777....77.....
            .......7....7777e7777....7......
            ............777777777...........
            ...........fffffffffff..........
            ............fffffffff...........
            ............fffffffff...........
            ....d.d.....fffffffff...........
            ..d1dd1d...777..d1d777..........
            ...d1dd1dd.777.d1dd777..........
            ....d1dd1d.777d1ddd777..........
            .....d1dd177771ddd.7777.........
            `],
        2000,
        false
        )
        if (Distance <= 100) {
            mySprite.setVelocity(1000, -1000)
            mySprite.setVelocity(0, 0)
            info.changeLifeBy(-1)
        }
    } else if (list == 2) {
        animation.runImageAnimation(
        final_boss,
        [img`
            ............777777777...........
            ...........7eee777eee7..........
            ..........77727eee72777.........
            ..........77777eee77777.........
            ..........777777e777777.........
            ..........777777e777777.........
            ..........7777777777777.........
            ..........7777777777777.........
            ..........777fffffff777.........
            ...........77115111177..........
            ............771777177...........
            .............7777777............
            .........7777..777..7777........
            ........77777777777777777.......
            ........77777777777777777.......
            ......777777777777777777777.....
            ......777777777777777777777.....
            ......77....7eeeeeee7....77.....
            ......77....777eee777....77...ee
            ......77....77eeeee77....77..eee
            .....7777...7777e7777..e7777eeee
            ......77....777eee777.eee77eeeee
            .......7....7777e7777..ee7eeeeee
            ............777777777........eee
            ...........fffffffffff........ee
            ............fffffffff...........
            ............fffffffff...........
            ............fffffffff...........
            ...........777.....777..........
            ...........777.....777..........
            ...........777.....777..........
            ..........7777.....7777.........
            `,img`
            ............777777777...........
            ...........7eee777eee7..........
            ..........77727eee72777.........
            ..........77777eee77777.......ee
            ..........777777e777777......eee
            ..........777777e777777ee7eeeeee
            ..........7777777777777ee77eeeee
            ..........7777777777777e7777eeee
            ..........777fffffff777..77..eee
            ...........77115111177...77...ee
            ............771777177...777.....
            .............7777777....777.....
            .........7777..777..7777777.....
            ........7777777777777777777.....
            ........7777777777777777777.....
            ......777777777777777777777.....
            ......777777777777777777777.....
            ......77....7eeeeeee7...........
            ......77....777eee777...........
            ......77....77eeeee77...........
            .....7777...7777e7777...........
            ......77....777eee777...........
            .......7....7777e7777...........
            ............777777777...........
            ...........fffffffffff..........
            ............fffffffff...........
            ............fffffffff...........
            ............fffffffff...........
            ...........777.....777..........
            ...........777.....777..........
            ...........777.....777..........
            ..........7777.....7777.........
            `,img`
            ............777777777...........
            ...........7eee777eee7..........
            ..........77727eee72777.........
            ..........77777eee77777.........
            ..........777777e777777.........
            ..........777777e777777.........
            ..........7777777777777.........
            ..........7777777777777.........
            ..........777fffffff777.........
            ...........77115111177..........
            ............771777177...........
            .............7777777............
            .........7777..777..7777........
            ........77777777777777777.......
            ........77777777777777777.......
            ......777777777777777777777.....
            ......777777777777777777777.....
            ......77....7eeeeeee7....77.....
            ......77....777eee777....77...ee
            ......77....77eeeee77....77..eee
            .....7777...7777e7777..e7777eeee
            ......77....777eee777.eee77eeeee
            .......7....7777e7777..ee7eeeeee
            ............777777777........eee
            ...........fffffffffff........ee
            ............fffffffff...........
            ............fffffffff...........
            ............fffffffff...........
            ...........777.....777..........
            ...........777.....777..........
            ...........777.....777..........
            ..........7777.....7777.........
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `],
        2000,
        false
        )
    } else if (list == 3) {
        rock2 = darts.create(img`
            . . . . . . . . c c c c . . . . 
            . . . . c c c c c c c c c . . . 
            . . . c f c c a a a a c a c . . 
            . . c c f f f f a a a c a a c . 
            . . c c a f f c a a f f f a a c 
            . . c c a a a a b c f f f a a c 
            . c c c c a c c b a f c a a c c 
            c a f f c c c a b b 6 b b b c c 
            c a f f f f c c c 6 b b b a a c 
            c a a c f f c a 6 6 b b b a a c 
            c c b a a a a b 6 b b a b b a . 
            . c c b b b b b b b a c c b a . 
            . . c c c b c c c b a a b c . . 
            . . . . c b a c c b b b c . . . 
            . . . . c b b a a 6 b c . . . . 
            . . . . . . b 6 6 c c . . . . . 
            `, SpriteKind.rock, finalBoss.x, finalBoss.y)
        rock2.angle = Angle
        rock2.pow = 100
        rock2.changeScale(2, ScaleAnchor.Middle)
        rock2.throwDart()
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.bubble, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.warmRadial, 500)
})
sprites.onOverlap(SpriteKind.playerdart, SpriteKind.goblin, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 100)
    effects.clearParticles(otherSprite)
    pointspowerup = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 5 5 5 5 5 2 . . . . . 
        . . . . 2 5 f 5 f 5 2 . . . . . 
        . . . . 2 5 5 5 5 5 2 . . . . . 
        . . . . 2 5 5 f 5 5 2 . . . . . 
        . . . . 2 5 5 5 5 5 2 . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . 7 . 7 . 7 . . 7 7 . . . . 
        . . . 7 7 7 7 7 7 7 7 . . . . . 
        . . . . 7 . . 7 . . 7 . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . 9 1 1 1 1 1 1 1 9 . . . . 
        . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
        . . . 9 1 1 1 1 1 1 1 9 . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . 3 1 1 1 1 1 1 1 1 1 3 . . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . . 3 1 1 1 1 1 1 1 1 1 3 . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 1 1 1 1 1 1 1 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 1 1 1 1 1 1 1 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 1 1 1 1 1 1 1 2 . . . . 
        . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
        . . . 2 1 1 1 1 1 1 1 2 . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a a . . . . 
        . . . . a 1 1 1 1 1 1 1 a . . . 
        . . . a 1 1 1 1 1 1 1 1 1 a . . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . . a 1 1 1 1 1 1 1 1 1 a . . 
        . . . . a 1 1 1 1 1 1 1 a . . . 
        . . . . . a a a a a a a . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . 4 1 1 1 1 1 1 1 4 . . . . 
        . . 4 1 1 1 1 1 1 1 1 1 4 . . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . . 4 1 1 1 1 1 1 1 1 1 4 . . . 
        . . . 4 1 1 1 1 1 1 1 4 . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . 7 1 1 1 1 1 1 1 7 . . . 
        . . . 7 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . . 7 1 1 1 1 1 1 1 1 1 7 . . 
        . . . . 7 1 1 1 1 1 1 1 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
    otherSprite.setImage(pointspowerup[randint(0, pointspowerup.length - 1)])
    if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . 9 1 1 1 1 1 1 1 9 . . . . 
        . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
        . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
        . . . 9 1 1 1 1 1 1 1 9 . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . 9 1 1 1 1 1 1 1 9 . . . . 
            . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
            . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
            . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
            . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
            . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
            . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
            . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
            . 9 1 1 1 1 1 1 1 1 1 1 1 9 . . 
            . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
            . . . 9 1 1 1 1 1 1 1 9 . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setVelocity(0, 120)
        otherSprite.setKind(SpriteKind.point)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . 3 1 1 1 1 1 1 1 1 1 3 . . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
        . . 3 1 1 1 1 1 1 1 1 1 3 . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 3 3 3 3 3 3 3 . . . . . 
            . . . 3 1 1 1 1 1 1 1 3 . . . . 
            . . 3 1 1 1 1 1 1 1 1 1 3 . . . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 3 . . 
            . . 3 1 1 1 1 1 1 1 1 1 3 . . . 
            . . . 3 1 1 1 1 1 1 1 3 . . . . 
            . . . . 3 3 3 3 3 3 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.point)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 1 1 1 1 1 1 1 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 1 1 1 1 1 1 1 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . 5 1 1 1 1 1 1 1 5 . . . . 
            . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
            . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
            . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
            . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
            . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
            . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
            . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
            . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
            . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
            . . . 5 1 1 1 1 1 1 1 5 . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.point)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 1 1 1 1 1 1 1 2 . . . . 
        . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
        . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
        . . . 2 1 1 1 1 1 1 1 2 . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 1 1 1 1 1 1 1 2 . . . . 
            . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
            . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
            . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
            . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
            . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
            . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
            . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
            . 2 1 1 1 1 1 1 1 1 1 1 1 2 . . 
            . . 2 1 1 1 1 1 1 1 1 1 2 . . . 
            . . . 2 1 1 1 1 1 1 1 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.point)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a a . . . . 
        . . . . a 1 1 1 1 1 1 1 a . . . 
        . . . a 1 1 1 1 1 1 1 1 1 a . . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
        . . . a 1 1 1 1 1 1 1 1 1 a . . 
        . . . . a 1 1 1 1 1 1 1 a . . . 
        . . . . . a a a a a a a . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . a a a a a a a . . . . 
            . . . . a 1 1 1 1 1 1 1 a . . . 
            . . . a 1 1 1 1 1 1 1 1 1 a . . 
            . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
            . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
            . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
            . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
            . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
            . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
            . . a 1 1 1 1 1 1 1 1 1 1 1 a . 
            . . . a 1 1 1 1 1 1 1 1 1 a . . 
            . . . . a 1 1 1 1 1 1 1 a . . . 
            . . . . . a a a a a a a . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.point)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . 4 1 1 1 1 1 1 1 4 . . . . 
        . . 4 1 1 1 1 1 1 1 1 1 4 . . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
        . . 4 1 1 1 1 1 1 1 1 1 4 . . . 
        . . . 4 1 1 1 1 1 1 1 4 . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 4 4 4 4 4 4 4 . . . . . 
            . . . 4 1 1 1 1 1 1 1 4 . . . . 
            . . 4 1 1 1 1 1 1 1 1 1 4 . . . 
            . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
            . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
            . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
            . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
            . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
            . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
            . 4 1 1 1 1 1 1 1 1 1 1 1 4 . . 
            . . 4 1 1 1 1 1 1 1 1 1 4 . . . 
            . . . 4 1 1 1 1 1 1 1 4 . . . . 
            . . . . 4 4 4 4 4 4 4 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.point)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . 7 1 1 1 1 1 1 1 7 . . . 
        . . . 7 1 1 1 1 1 1 1 1 1 7 . . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
        . . . 7 1 1 1 1 1 1 1 1 1 7 . . 
        . . . . 7 1 1 1 1 1 1 1 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 7 7 7 7 7 7 7 . . . . 
            . . . . 7 1 1 1 1 1 1 1 7 . . . 
            . . . 7 1 1 1 1 1 1 1 1 1 7 . . 
            . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
            . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
            . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
            . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
            . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
            . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
            . . 7 1 1 1 1 1 1 1 1 1 1 1 7 . 
            . . . 7 1 1 1 1 1 1 1 1 1 7 . . 
            . . . . 7 1 1 1 1 1 1 1 7 . . . 
            . . . . . 7 7 7 7 7 7 7 . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.point)
    } else {
        if (otherSprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 5 5 5 5 5 2 . . . . . 
            . . . . 2 5 f 5 f 5 2 . . . . . 
            . . . . 2 5 5 5 5 5 2 . . . . . 
            . . . . 2 5 5 f 5 5 2 . . . . . 
            . . . . 2 5 5 5 5 5 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . 7 . 7 . 7 . . 7 7 . . . . 
            . . . 7 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 . . 7 . . 7 . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            `)) {
            pointspowerup.pop()
            otherSprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 2 2 2 2 2 . . . . . . 
                . . . . 2 5 5 5 5 5 2 . . . . . 
                . . . . 2 5 f 5 f 5 2 . . . . . 
                . . . . 2 5 5 5 5 5 2 . . . . . 
                . . . . 2 5 5 f 5 5 2 . . . . . 
                . . . . 2 5 5 5 5 5 2 . . . . . 
                . . . . . 2 2 2 2 2 . . . . . . 
                . . . . . . . 7 . . . . . . . . 
                . . . . . . . 7 . . . . . . . . 
                . . . 7 . 7 . 7 . . 7 7 . . . . 
                . . . 7 7 7 7 7 7 7 7 . . . . . 
                . . . . 7 . . 7 . . 7 . . . . . 
                . . . . . . . 7 . . . . . . . . 
                . . . . . . 7 7 7 . . . . . . . 
                . . . . . . 7 7 7 . . . . . . . 
                `)
            otherSprite.setKind(SpriteKind.powerup)
        }
    }
    otherSprite.setVelocity(0, 120)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.powerup, function (sprite, otherSprite) {
    info.changeScoreBy(20)
    info.changeLifeBy(10)
    sprites.destroy(otherSprite)
})
let angleFinalBoss = 0
let DistanceFinalBoss = 0
let angle = 0
let projectile: Dart = null
let distanceEMENY1 = 0
let rock2: Dart = null
let enemy2: Sprite = null
let mySprite3: Sprite = null
let enemy1: Sprite = null
let mySprite5 = 0
let pointspowerup: Image[] = []
let player2dart: Dart = null
let player2leftdart: Dart = null
let sprite42 = 0
let myDart: Dart = null
let leftDart: Dart = null
let mySprite4 = 0
let mySprite2: Sprite = null
let bubble2: Sprite = null
let player2jump = 0
let jump = 0
let finalBossMove: number[] = []
let final_boss: Sprite = null
let difficulty = 0
let mySprite: Sprite = null
let player2: Sprite = null
player2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e d d . . . . . . . 
    . . . . . . d d d . . d . . . . 
    . . . . d f f f f f d d . . . . 
    . . . . d d d f f f d d . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 97))
mySprite.setScale(2, ScaleAnchor.Middle)
mySprite.ay = 300
controller.moveSprite(mySprite, 100, 0)
difficulty = game.askForNumber("Choose difficulty!", 1)
final_boss = sprites.create(img`
    .............777777.............
    ............77777777............
    ...........7eee77eee7...........
    ..........77727ee72777..........
    ..........777777777777..........
    ..........777777777777..........
    ..........777ffffff777..........
    ...........7711511177...........
    ............77177177............
    .............777777.............
    .........7777..77..7777.........
    ........7777777777777777........
    ........7777777777777777........
    ......7777777777777777777.......
    ......7777777777777777777.......
    ......77....7eeeeee7...77.......
    ......77....777ee777...77.......
    ......77....7eeeeee7...77.......
    ......77....777ee777...77.......
    .....7777...7eeeeee7..7777......
    ......77....777ee777...77.......
    .......7....77eeee77...7........
    ............77777777............
    ...........ffffffffff...........
    ............ffffffff............
    ............ffffffff............
    ............ffffffff............
    ...........777....777...........
    ...........777....777...........
    ...........777....777...........
    ...........777....777...........
    ..........7777....7777..........
    `, SpriteKind.FinalBoss)
tiles.placeOnTile(final_boss, tiles.getTileLocation(6, 68))
let statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
final_boss.changeScale(2.5, ScaleAnchor.Middle)
statusbar.attachToSprite(final_boss, 500, 0)
Difficulty(mySprite, finalBossMove, true, difficulty)
info.setScore(0)
jump = 0
finalBossMove = [
0,
1,
2,
3,
4
]
game.showLongText("use a to fire, and b to create a shield", DialogLayout.Bottom)
let _1point = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.point)
game.onUpdateInterval(1000, function () {
	
})
game.onUpdateInterval(1000, function () {
    for (let value of sprites.allOfKind(SpriteKind.DartEnemy)) {
        distanceEMENY1 = Math.sqrt(Math.abs((mySprite.x - value.x) * (mySprite.x - value.x) + (mySprite.y - value.y) * (mySprite.y - value.y)))
        if (distanceEMENY1 <= 100) {
            if (mySprite.x >= value.x) {
                projectile = darts.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 2 2 4 4 4 4 2 . . . . 
                    . 2 2 2 4 4 1 1 1 1 1 4 2 . . . 
                    . 1 1 1 1 1 1 1 1 1 1 1 2 . . . 
                    . 2 2 2 4 4 1 1 1 1 1 4 2 . . . 
                    . . . . . 2 2 2 4 4 4 2 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile, value.x, value.y)
                if (mySprite.y >= value.y) {
                    angle = 360 - Math.cos(distanceEMENY1 * distanceEMENY1 - (mySprite.y - value.y) * (mySprite.y - value.y) - (mySprite.x - value.x) * (mySprite.x - value.x) / ((0 - 2) * ((mySprite.y - value.y) * (mySprite.x - value.x))))
                } else {
                    angle = 0 + Math.abs(Math.cos(distanceEMENY1 * distanceEMENY1 - (value.y - mySprite.y) * (value.y - mySprite.y) - (mySprite.x - value.x) * (mySprite.x - value.x) / ((0 - 2) * ((mySprite.y - value.y) * (mySprite.x - value.x)))))
                }
            } else if (mySprite.x <= value.x) {
                projectile = darts.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 2 4 4 4 2 2 2 . . . . . 
                    . . . 2 4 1 1 1 1 1 4 4 2 2 2 . 
                    . . . 2 1 1 1 1 1 1 1 1 1 1 1 . 
                    . . . 2 4 1 1 1 1 1 4 4 2 2 2 . 
                    . . . . 2 4 4 4 4 2 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile, value.x, value.y)
                if (mySprite.y <= value.y) {
                    angle = 180 - Math.abs(Math.cos(distanceEMENY1 * distanceEMENY1 - (value.y - mySprite.y) * (value.y - mySprite.y) - (mySprite.x - value.x) * (mySprite.x - value.x) / ((0 - 2) * ((mySprite.y - value.y) * (mySprite.x - value.x)))))
                } else {
                    angle = 180 + Math.abs(Math.cos(distanceEMENY1 * distanceEMENY1 - (value.y - mySprite.y) * (value.y - mySprite.y) - (mySprite.x - value.x) * (mySprite.x - value.x) / ((0 - 2) * ((mySprite.y - value.y) * (mySprite.x - value.x)))))
                }
            }
            projectile.angle = angle
            projectile.pow = 100
            projectile.throwDart()
        }
    }
})
game.onUpdateInterval(100, function () {
    for (let value2 of sprites.allOfKind(SpriteKind.FinalBoss)) {
        DistanceFinalBoss = Math.sqrt(Math.abs((mySprite.x - value2.x) * (mySprite.x - value2.x) + (mySprite.y - value2.y) * (mySprite.y - value2.y)))
        if (DistanceFinalBoss <= 200) {
            if (mySprite.x >= value2.x) {
                if (mySprite.y >= value2.y) {
                    angleFinalBoss = 360 - Math.abs(Math.cos(DistanceFinalBoss * DistanceFinalBoss - (value2.y - mySprite.y) * (value2.y - mySprite.y) - (mySprite.x - value2.x) * (mySprite.x - value2.x) / ((0 - 2) * ((mySprite.y - value2.y) * (mySprite.x - value2.x)))))
                } else {
                    angleFinalBoss = 0 + Math.abs(Math.cos(DistanceFinalBoss * DistanceFinalBoss - (value2.y - mySprite.y) * (value2.y - mySprite.y) - (mySprite.x - value2.x) * (mySprite.x - value2.x) / ((0 - 2) * ((mySprite.y - value2.y) * (mySprite.x - value2.x)))))
                }
            } else if (mySprite.x <= value2.x) {
                if (mySprite.y <= value2.y) {
                    angleFinalBoss = 180 - Math.abs(Math.cos(DistanceFinalBoss * DistanceFinalBoss - (value2.y - mySprite.y) * (value2.y - mySprite.y) - (mySprite.x - value2.x) * (mySprite.x - value2.x) / ((0 - 2) * ((mySprite.y - value2.y) * (mySprite.x - value2.x)))))
                } else {
                    angleFinalBoss = 180 + Math.abs(Math.cos(DistanceFinalBoss * DistanceFinalBoss - (value2.y - mySprite.y) * (value2.y - mySprite.y) - (mySprite.x - value2.x) * (mySprite.x - value2.x) / ((0 - 2) * ((mySprite.y - value2.y) * (mySprite.x - value2.x)))))
                }
            }
            FinalBoss1(finalBossMove._pickRandom(), final_boss, DistanceFinalBoss, angleFinalBoss, difficulty, true)
        }
    }
})
