あ = 0
def あ2():
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . # . .
                . . . . .
    """)
    basic.pause(2)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.pause(2)
    basic.show_leds("""
        . . . . .
                . . # . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.pause(2)
    basic.show_leds("""
        . . # . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.clear_screen()

def on_button_pressed_a():
    global あ
    if あ == 1:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . # . . .
        """)
        あ = 2
    else:
        if True:
            pass
        else:
            pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global あ
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . # . .
    """)
    あ = 3
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    あ2()
input.on_button_pressed(Button.B, on_button_pressed_b)
