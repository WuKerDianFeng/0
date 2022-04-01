let 溫度 = 0
let 濕度 = 0
basic.forever(function () {
    溫度 = input.temperature()
    濕度 = pins.analogReadPin(AnalogPin.P10)
    basic.showString("HUMI")
    basic.showNumber(濕度)
    basic.clearScreen()
    if (濕度 < 500) {
        pins.servoWritePin(AnalogPin.P16, 90)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P16, 0)
        basic.pause(500)
    }
    basic.clearScreen()
    basic.showString("TEMP")
    basic.showNumber(溫度)
    basic.clearScreen()
    // 預計會開燈，增加溫度
    if (溫度 < 10) {
        // 控制紅燈
        pins.analogWritePin(AnalogPin.P2, 0)
    } else {
        // 控制藍燈
        pins.analogWritePin(AnalogPin.P1, 0)
    }
    basic.clearScreen()
})
