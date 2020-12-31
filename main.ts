let temperatur = 0
let tm = 0
let count = 0
let _4digit = grove.createDisplay(DigitalPin.P1, DigitalPin.P2)
_4digit.set(4)
basic.showIcon(IconNames.Happy)
makerbit.connectLcd(39)
makerbit.setLcdBacklight(LcdBacklight.Off)
basic.pause(1000)
makerbit.setLcdBacklight(LcdBacklight.On)
basic.pause(1000)
basic.forever(function () {
    makerbit.setLcdBacklight(LcdBacklight.Off)
    makerbit.showStringOnLcd1602("MakerBit", makerbit.position1602(LcdPosition1602.Pos1), 16)
    while (true) {
        tm = pins.analogReadPin(AnalogPin.P3)
        temperatur = tm - tm % 5 / 5
        _4digit.show(temperatur)
        basic.pause(100)
    }
})
