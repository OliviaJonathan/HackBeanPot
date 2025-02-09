var snd = new Audio("src/boom.mp3");
let sleep = true;
let sit = true
let leftPosition = 0;
let muted = false;
let color = 0;

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
    const capybaraImg = document.getElementById("capybara");

    if (event.key === "z") {
        capybaraImg.src = capybara.src.replace("src/capybaraawake.png", "src/capybaraasleep.png");
    }
    else if (event.key === "s") {
        const newSrc = sit ? "src/capybarastand.png" : "src/capybaraawake.png";
        capybaraImg.src = capybara.src.replace(sit ? "src/capybaraawake.png" : "src/capybarastand.png", newSrc);
        sit = !sit;
    }
    else if (event.key === 'ArrowLeft' && !sit && leftPosition > -300) {
        leftPosition -= 10;
        capybara.style.left = leftPosition + 'px';
    } else if (event.key === 'ArrowRight' && !sit && leftPosition < 300) {
        leftPosition += 10;
        capybara.style.left = leftPosition + 'px';
    }
    else if (/^[0-9]$/i.test(event.key)) {
        color = event.key * 36;
        capybaraImg.style.filter = `hue-rotate(${color}deg)`;
    }

    

});

