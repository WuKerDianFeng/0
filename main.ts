let 濕度 = 0
let 溫度 = 0
loops.everyInterval(1000, function () {
    lcd1602.putString("HUMI", 0, 0)
    lcd1602.putNumber(濕度, 0, 1)
    lcd1602.putString("TEMP", 5, 0)
    lcd1602.putNumber(溫度, 5, 1)
    basic.pause(900)
})
basic.forever(function () {
    lcd1602.setAddress(
    lcd1602.I2C_ADDR.addr1
    )
    溫度 = input.temperature()
    濕度 = pins.analogReadPin(AnalogPin.P10)
    if (濕度 < 300) {
        pins.servoWritePin(AnalogPin.P16, 90)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P16, 0)
        basic.pause(1000)
    }
    // 預計會開燈，增加溫度
    if (溫度 < 30) {
        // 控制紅燈
        pins.analogWritePin(AnalogPin.P2, 0)
        basic.pause(1000)
    } else {
        // 控制藍燈
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(1000)
    }
})
