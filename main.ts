input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
for (let index = 0; index < 2; index++) {
    basic.showLeds(`
        . # . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . # # . .
        `)
}
servos.P2.run(100)
servos.P2.setAngle(0)
basic.pause(1000)
basic.forever(function () {
    if (500 <= pins.analogReadPin(AnalogPin.P0)) {
        servos.P2.setAngle(90)
        basic.showIcon(IconNames.Happy)
    } else {
        servos.P2.setAngle(0)
        basic.showIcon(IconNames.Sad)
    }
})
