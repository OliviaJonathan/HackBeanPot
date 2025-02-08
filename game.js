var snd = new Audio("src/boom.mp3");
let sleep = true;
let sit = true
let leftPosition = 0;
let muted = false;

function mute(img) {
    console.log("mute");
    if (muted) {
        img.src = img.src.replace("src/mute.png", "src/unmute.png");
        muted = false;
    } else {
        img.src = img.src.replace("src/unmute.png", "src/mute.png");
        muted = true;
    }
}

function awake(){
    // first time waking up capybara
    document.getElementById("capybara").src = capybara.src.replace("src/capybaraasleep.png", "src/capybaraawake.png");
    if (sleep) {
        if(!muted){
            snd.play();
        }
        sleep = false
    }
    // take out hint
    document.getElementById("hint").innerHTML = "have fun!";
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
            if(!muted){
                sound.play();
            }
        }

        console.log("Fart");
})





document.addEventListener('keydown', function(event) {
    // Log the key that was pressed
    console.log("Key pressed: " + event.key)

    // if z is clicked, capybara goes to sleep
    if(event.key === "z") {
        document.getElementById("capybara").src = capybara.src.replace("src/capybaraawake.png", "src/capybaraasleep.png");
    }
    // if s is clicked, capybara stands
    if(event.key === "s") {
        if(sit){
            document.getElementById("capybara").src = capybara.src.replace("src/capybaraawake.png", "src/capybarastand.png");
            sit = false;
        }else{
            document.getElementById("capybara").src = capybara.src.replace("src/capybarastand.png", "src/capybaraawake.png");
            sit = true;
        }
    }
    if(event.key === 'ArrowLeft' ){
        if(sit == false && leftPosition > -300)
        leftPosition -= 10; // Move 10 pixels to the left (adjust as needed)
        capybara.style.left = leftPosition + 'px';
    }

    if(event.key === 'ArrowRight'){
        if(sit == false && leftPosition < 300)
        leftPosition += 10; // Move 10 pixels to the left (adjust as needed)
        capybara.style.left = leftPosition + 'px';
    }

    

});

