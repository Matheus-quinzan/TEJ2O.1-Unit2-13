/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matheus Quinzan
 * Created on: Oct 2025
 * This program turns on neopixels based on the number displayed on the micro bit
*/

// variables
let loopCounter: number = 4
let neopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Duck)

// turn on all the lights
input.onButtonPressed(Button.A, function () {
    while (loopCounter > 0) {

        if (loopCounter == 4) {
            // lights up 4 neopixels
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.show()
            basic.showNumber(loopCounter)
            loopCounter = loopCounter - 1
        }

        if (loopCounter == 3) {
            // lights up 3 neopixels
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.showNumber(loopCounter)
            loopCounter = loopCounter - 1
        }

        if (loopCounter == 2) {
            // lights up 2 neopixels
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.showNumber(loopCounter)
            loopCounter = loopCounter - 1
        }

        if (loopCounter == 1) {
            // lights up 1 neopixel
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.showNumber(loopCounter)
            loopCounter = loopCounter - 1
        }

    } if (loopCounter == 0) {
        // turns off all neopixels on robot bit
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showNumber(loopCounter)
    }
    basic.showIcon(IconNames.Duck)
})
