input.onGesture(Gesture.Shake, function () {
    radio.sendValue("Zara", 69)
})
music.play(music.stringPlayable("E A F C G B C5 D ", 250), music.PlaybackMode.UntilDone)
basic.showString("Hello!")
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
music.play(music.stringPlayable("C D C E F G D F ", 300), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(988, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Butterfly)
basic.showIcon(IconNames.Heart)
basic.showLeds(`
    . # # # .
    . # # # .
    . # # # .
    . . # . .
    . . # . .
    `)
basic.showArrow(ArrowNames.North)
basic.showArrow(ArrowNames.East)
basic.showArrow(ArrowNames.South)
basic.showArrow(ArrowNames.West)
basic.showIcon(IconNames.Rabbit)
basic.showString("Bye!")
music.play(music.stringPlayable("E A G C F B C5 D ", 120), music.PlaybackMode.UntilDone)
loops.everyInterval(500, function () {
    music.play(music.stringPlayable("C5 G B D A F C5 B ", 190), music.PlaybackMode.InBackground)
})
basic.forever(function () {
	
})
