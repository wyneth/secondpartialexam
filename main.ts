let sum_youthpersons = 0
let sum_seniorirypersons = 0
let average_age = 0
let age = 0
let age_sum = 0
let dice_one = 0
let dice_two = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    sum_youthpersons = 0
    sum_seniorirypersons = 0
    average_age = 0
    for (let index = 0; index < 15; index++) {
        age = randint(0, 70)
        basic.showNumber(age)
        age_sum += age
        if (age >= 0 && age <= 14) {
            basic.showString("childhood")
            sum_youthpersons += 1
        } else if (age >= 15 && age <= 24) {
            basic.showString("youth")
            sum_youthpersons += 1
        } else if (age >= 25 && age <= 64) {
            basic.showString("Adulthood")
            sum_youthpersons += 1
        } else if (age >= 65) {
            basic.showString("Seniority")
            sum_seniorirypersons += 1
        }
    }
    average_age = age_sum / 15
    basic.showString("Average age")
    basic.showNumber(average_age)
    basic.clearScreen()
    basic.showString("total youth persons")
    basic.showNumber(sum_youthpersons)
    basic.showString("total seniority persons")
    basic.showNumber(sum_seniorirypersons)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let numbers = 0; numbers <= 3; numbers++) {
        basic.showNumber(numbers)
        basic.clearScreen()
    }
    dice_one = randint(1, 6)
    dice_two = randint(1, 6)
    basic.showNumber(dice_one)
    basic.showNumber(dice_two)
    if (dice_one == 6 && dice_two == 6) {
        basic.showString("WIN")
        music.playMelody("C5 B A G F E D C ", 120)
    } else {
        basic.showString("LOSE")
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        y = randint(0, 4)
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(200)
            basic.clearScreen()
            basic.pause(200)
        }
    }
})
