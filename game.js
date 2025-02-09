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

// Go back to sleep
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

    if(event.key === "c"){
        if (color <= 360){
            color += 30
            console.log("Color: " + color)
        }else{
            color = 0
        }
        document.getElementById("capybara").style.filter =  `hue-rotate(${color}deg)`
    }


});


// Make the DIV element draggable:
//dragElement(document.getElementById("floppy"));
// Apply dragElement to each element with class "hat"
document.querySelectorAll('.hat').forEach(function (el) {
    dragElement(el);
});

function dragElement(elmnt) {

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        if (elmnt.id === "wig"){
            elmnt.style.width = "10vw";
        }
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        const x = event.clientX;
        const y = event.clientY;
        if (elmnt.id === "wig" && 174 <= x && x <= 234 && 192 <= y && y<= 423){
            elmnt.style.width = "5vw";
        }
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

/* to help with finding coordinates of div
const coordinatesDiv = document.getElementById('coordinates');

document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    coordinatesDiv.textContent = `Mouse X: ${x}, Mouse Y: ${y}`;
});*/
