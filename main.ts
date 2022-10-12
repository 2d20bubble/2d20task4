let suiiii = 0
input.onButtonPressed(Button.A, function () {
    suiiii = 0
    while (suiiii >= 4) {
        led.plot(suiiii, 0)
        basic.pause(1000)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
