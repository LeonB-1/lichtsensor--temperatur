basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 1000) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 1000000) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
