/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Sep 2020
 * This program ...
*/

// variable
let counter : number = 4
let neopixels

//setup
basic.clearScreen()
basic.showIcon(IconNames.Duck)

input.onButtonPressed(Button.A, function() {
    while (counter > 0){
        basic.showNumber(counter)
        neopixel.create(DigitalPin.P0, 16, NeoPixelMode.RGB)
        
    }
})