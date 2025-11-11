basic.forever(function on_forever() {
    let temp = input.temperature()
    led.plotBarGraph(temp, 50)
})
let x = 2
let y = 2
basic.forever(function on_forever2() {
    
    led.plot(x, y)
    basic.pause(50)
    led.unplot(x, y)
    let aceleracionX = input.acceleration(Dimension.X)
    let aceleracionY = input.acceleration(Dimension.Y)
    if (aceleracionX <= 150 && x > 0) {
        x = x - 1
    }
    
    if (aceleracionX > 150 && x < 4) {
        x = x + 1
    }
    
    if (aceleracionY <= 150 && y > 0) {
        y = y - 1
    }
    
    if (aceleracionY > 150 && y < 4) {
        y = y + 1
    }
    
})
