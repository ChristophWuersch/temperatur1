let tm = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    tm = pins.analogReadPin(AnalogPin.P3)
    basic.showNumber(tm - tm % 5 / 5)
})
