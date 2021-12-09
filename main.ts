let 確認 = 0
let 敵: game.LedSprite = null
let User: game.LedSprite = null
let 玉: game.LedSprite = null
function 敵召喚 () {
    if (確認 == 2) {
        敵動作1()
    }
}
function 敵動作1 () {
    確認 = 0
    basic.pause(100)
    敵 = game.createSprite(randint(0, 4), 0)
    敵.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        敵.move(1)
        if (確認 == 1) {
            確認 = 2
            敵召喚()
            break;
        }
        if (敵.get(LedSpriteProperty.Y) == 4) {
            for (let index = 0; index < 3; index++) {
                game.gameOver()
            }
            break;
        }
    }
}
input.onButtonPressed(Button.A, function () {
    if (User.get(LedSpriteProperty.X) <= 3) {
        User.move(1)
    } else {
        User.set(LedSpriteProperty.X, 0)
    }
})
function スタート () {
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    敵 = game.createSprite(2, 2)
    basic.pause(500)
    敵.delete()
    basic.showString("Start")
    User = game.createSprite(2, 4)
    敵動作1()
}
input.onButtonPressed(Button.AB, function () {
    スタート()
})
input.onButtonPressed(Button.B, function () {
    玉 = game.createSprite(User.get(LedSpriteProperty.X), 3)
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        玉.change(LedSpriteProperty.Y, -1)
        if (玉.isTouching(敵)) {
            敵.delete()
            玉.delete()
            game.addScore(1)
            確認 = 1
            break;
        }
        if (玉.get(LedSpriteProperty.Y) == 0) {
            玉.delete()
        }
    }
})
