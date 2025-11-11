def on_forever():
    temp = input.temperature()
    led.plot_bar_graph(temp, 50)
basic.forever(on_forever)

x = 2
y = 2

def on_forever2():
    global x, y

    led.plot(x, y)
    basic.pause(50)
    led.unplot(x, y)

    aceleracionX = input.acceleration(Dimension.X)
    aceleracionY = input.acceleration(Dimension.Y)
    if aceleracionX <= 150 and x > 0:
        x = x - 1
    if aceleracionX > 150 and x < 4:
        x = x + 1
    if aceleracionY <= 150 and y > 0:
        y = y - 1
    if aceleracionY > 150 and y < 4:
       y = y + 1
 
basic.forever(on_forever2)