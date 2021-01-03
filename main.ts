let temperatur = 0
let tm = 0
let count = 0
let _4digit = grove.createDisplay(DigitalPin.P1, DigitalPin.P2)
_4digit.set(4)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    while (true) {
        tm = pins.analogReadPin(AnalogPin.P3)
        temperatur = tm - tm % 5 / 5
        _4digit.show(temperatur)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(2000)
    }
})
