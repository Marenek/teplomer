let teplota = 0
basic.showString("TEPLOMER")
let taplotaMinula = 0
basic.forever(function () {
    teplota = input.temperature()
    basic.showNumber(teplota)
    if (teplota > taplotaMinula) {
        basic.showArrow(ArrowNames.North)
    } else if (teplota < taplotaMinula) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showString("-")
    }
    taplotaMinula = teplota
    basic.pause(1000)
    basic.showString(" ")
})
