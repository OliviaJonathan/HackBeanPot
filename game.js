var snd = new Audio("src/boom.mp3");
let sleep = true;

function awake(){
    // first time waking up capybara
    document.getElementById("capybara").src = capybara.src.replace("src/capybaraasleep.png", "src/capybaraawake.png");
    if (sleep) {
        snd.play();
        sleep = false
    }
    // take out hint
    document.getElementById("hint").innerHTML = "";
    document.getElementById("hint").style = "padding: 3.6%";
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

// Go back to sleep
document.addEventListener('keydown', function(event) {
    // Log the key that was pressed
    console.log("Key pressed: " + event.key)

    // if z is clicked, capybara goes to sleep
    if(event.key === "z") {
        document.getElementById("capybara").src = capybara.src.replace("src/capybaraawake.png", "src/capybaraasleep.png");
    }

});

// drag & drop
let newX = 0, newY=0, startX=1000, startY=1000;
const flhat = document.getElementById("flhat");
flhat.addEventListener('mousedown', mouseDown)
/* pick hat up */
function mouseDown(e){
    startX = e.clientX
    startY = e.clientY
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}
/* drag hat around */
function mouseMove(e){
    newX = startX - e.clientX;
    newY = startY - e.clientY;
    startX = e.clientX;
    startY = e.clientY;
    flhat.style.top = startY + 'px';
    flhat.style.left = startX + 'px';
    flhat.style.top = (flhat.offsetTop - 2*newY) +'px';
    flhat.style.left = (flhat.offsetLeft - 2*newX) + 'px';
}
/* release hat @ new position */
function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove);
}