let 溫度 = 0
let 濕度 = 0
basic.forever(function () {
    溫度 = pins.analogReadPin(AnalogPin.P0)
    濕度 = pins.analogReadPin(AnalogPin.P10)
    basic.showString("HUMI")
    basic.showNumber(濕度)
    basic.clearScreen()
    if (濕度 < 500) {
        pins.servoWritePin(AnalogPin.P16, 90)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P16, 0)
        basic.pause(5000)
    }
    basic.clearScreen()
    basic.showString("TEMP")
    basic.showNumber(溫度)
    // 預計會開燈，增加溫度
    if (溫度 < 27) {
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.showIcon(IconNames.No)
    } else {
        pins.digitalWritePin(DigitalPin.P3, 0)
        basic.showIcon(IconNames.Yes)
    }
    basic.clearScreen()
})
