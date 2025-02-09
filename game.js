const capybara = document.getElementById('capybara');
const sound = document.getElementById('fart');
const snd = new Audio("src/boom.mp3");
let sleep = true;
let sit = true;
let leftPosition = 0;
let muted = false;
let color = 0;

function mute(img) {
    muted = !muted;
    img.src = muted ? "src/mute.png" : "src/unmute.png";
}

function awake() {
    capybara.src = capybara.src.replace("src/capybaraasleep.png", "src/capybaraawake.png");
    if (sleep) {
        if (!muted) snd.play();
        sleep = false;
    }
    document.getElementById("hint").innerHTML = "have fun!";
}
// fart!
capybara.addEventListener('click', function(event) {
    const imageRect = capybara.getBoundingClientRect();
    const clickX = event.clientX - imageRect.left;
    const clickY = event.clientY - imageRect.top;

    let clickArea = { x: 80, y: 100, width: 30, height: 20 };
    if (position === "Right") {
        clickArea = { x: 20, y: 100, width: 20, height: 20 };
    }

    if (clickX >= clickArea.x && clickX <= clickArea.x + clickArea.width &&
        clickY >= clickArea.y && clickY <= clickArea.y + clickArea.height) {
        sound.currentTime = 0;
        if (!muted) sound.play();
    }
});
// sleep, stand, movement, color change
let position = "Left"; // default capy position faces right
document.addEventListener('keydown', function(event) {
    if (event.key === "z") {
        capybara.src = capybara.src.replace("src/capybaraawake.png", "src/capybaraasleep.png");
    } else if (event.key === "s") {
        const newSrc = sit ? "src/capybarastand.png" : "src/capybaraawake.png";
        capybara.src = capybara.src.replace(sit ? "src/capybaraawake.png" : "src/capybarastand.png", newSrc);
        sit = !sit;
    } else if (event.key === 'ArrowLeft' && !sit && leftPosition > -300) {
        leftPosition -= 10;
        capybara.style.left = leftPosition + 'px';
        capybara.style.transform = "scaleX(1)";
        position = "Left";
    } else if (event.key === 'ArrowRight' && !sit && leftPosition < 300) {
        leftPosition += 10;
        capybara.style.left = leftPosition + 'px';
        capybara.style.transform = "scaleX(-1)";
        position = "Right";
    } else if (/^[0-9]$/i.test(event.key)) {
        color = event.key * 36;
        capybara.style.filter = `hue-rotate(${color}deg)`;
    }
});

// Apply dragElement to each element with class "hat"
document.querySelectorAll('.hat').forEach(function (el) {
    dragElement(el);
});

// drag hats
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
