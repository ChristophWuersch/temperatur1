let temperatur = 0
let tm = 0
let count = 0
let _4digit = grove.createDisplay(DigitalPin.P1, DigitalPin.P2)
_4digit.set(4)
basic.showIcon(IconNames.Happy)
makerbit.connectLcd(39)
makerbit.setLcdBacklight(LcdBacklight.On)
basic.pause(1000)
makerbit.setLcdBacklight(LcdBacklight.Off)
basic.forever(function () {
    makerbit.setLcdBacklight(LcdBacklight.On)
    while (true) {
        tm = pins.analogReadPin(AnalogPin.P3)
        temperatur = tm - tm % 5 / 5
        _4digit.show(temperatur)
        makerbit.showStringOnLcd1602(convertToText(temperatur), makerbit.position1602(LcdPosition1602.Pos1), 6)
        basic.pause(1000)
    }
})
