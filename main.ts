input.onButtonPressed(Button.A, function () {
    Temperatura += 1
})
input.onButtonPressed(Button.B, function () {
    Temperatura += -1
})
let Temperatura = randint(-5, 50)
basic.forever(function () {
    basic.showNumber(Temperatura)
    if (Temperatura < 20 || Temperatura > 35) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.clearScreen()
    }
})
