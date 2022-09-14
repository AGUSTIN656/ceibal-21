let Puntuacion = 0
let punto = 0
input.onButtonPressed(Button.A, function () {
    Puntuacion = 0
})
input.onGesture(Gesture.Shake, function () {
    game.startCountdown(15)
    punto += 1
    game.addScore(1)
})
input.onGesture(Gesture.LogoDown, function () {
    game.startCountdown(5)
    punto += 1
    game.addScore(1)
})
