// List of key codes to press to start the easter egg
// Up, Up, Down, Down, Left, Right, Left, Right, B, A
let keystrokes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// Create an empty array for user keystrokes
let userkeys = []

document.addEventListener('keydown', function(key) {
    // Add pressed key to keys array
    userkeys.push(key.keyCode)

    // If the pressed keys matches the required keystrokes (aka konami code)
    if (JSON.stringify(keystrokes) == JSON.stringify(userkeys)) {
        document.location.href = (Math.round(Math.random()) == 1) ? "https://www.youtube.com/watch?v=bxqLsrlakK8" : "https://www.youtube.com/watch?v=cGw-8FrRT1E" // Opens in the browser one of the two videos
        userkeys = [] // Clear the user keystrokes array
    }

    // If the last key does not match the required keystroke
    if (userkeys[userkeys.length - 1] != keystrokes[userkeys.length - 1]) {
        if (userkeys[1] == 38 && userkeys[2] == 38) {
            userkeys = [38, 38] // If the two last pressed keys are both Up, set the user keystrokes to Up, Up because the user could have forgotten that he pressed a key earlier
        } else {    
            userkeys = [] // Else, the program clears the user keystrokes array
        }
    }
})