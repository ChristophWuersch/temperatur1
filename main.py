temperatur = 0
tm = 0
count = 0
_4digit = grove.create_display(DigitalPin.P1, DigitalPin.P2)
_4digit.set(4)
basic.show_icon(IconNames.HAPPY)

def on_forever():
    global tm, temperatur
    while True:
        tm = pins.analog_read_pin(AnalogPin.P3)
        temperatur = tm - tm % 5 / 5
        _4digit.show(temperatur)
        pins.digital_write_pin(DigitalPin.P0, 0)
        basic.pause(2000)
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.pause(2000)
basic.forever(on_forever)
