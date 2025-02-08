function awake(){
    console.log("Awake");
    document.getElementById("capybara").src = capybara.src.replace("src/capybaraasleep.png", "src/capybaraawake.png");
}

// FART FUNCTION
const capybara = document.getElementById('capybara');
const sound = document.getElementById('fart');
capybara.addEventListener('click', function(){
        const imageRect = capybara.getBoundingClientRect();
        const clickX = event.clientX - imageRect.left;
        const clickY = event.clientY - imageRect.top;

        const clickArea = {
            x: 80,   // Starting X coordinate
            y: 100,   // Starting Y coordinate
            width: 30, // Width of the clickable area
            height: 20 // Height of the clickable area
        };

        // Check if the click is within the defined area
        if (clickX >= clickArea.x && clickX <= clickArea.x + clickArea.width &&
            clickY >= clickArea.y && clickY <= clickArea.y + clickArea.height) {
            // Reset time of audio
            sound.currentTime = 0;
            // Play the sound
            sound.play();
        }

        console.log("Fart");
})

