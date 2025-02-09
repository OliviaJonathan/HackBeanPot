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

capybara.addEventListener('click', function(event) {
    const imageRect = capybara.getBoundingClientRect();
    const clickX = event.clientX - imageRect.left;
    const clickY = event.clientY - imageRect.top;

    const clickArea = { x: 80, y: 100, width: 30, height: 20 };

    if (clickX >= clickArea.x && clickX <= clickArea.x + clickArea.width &&
        clickY >= clickArea.y && clickY <= clickArea.y + clickArea.height) {
        sound.currentTime = 0;
        if (!muted) sound.play();
    }
});

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
        capybara.style.transform = "scaleX(-1)";
    } else if (event.key === 'ArrowRight' && !sit && leftPosition < 300) {
        leftPosition += 10;
        capybara.style.left = leftPosition + 'px';
        capybara.style.transform = "scaleX(1)";
    } else if (/^[0-9]$/i.test(event.key)) {
        color = event.key * 36;
        capybara.style.filter = `hue-rotate(${color}deg)`;
    }
});