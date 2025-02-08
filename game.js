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



document.addEventListener('keydown', function(event) {
    // Log the key that was pressed
    console.log("Key pressed: " + event.key)

    // if z is clicked, capybara goes to sleep
    if(event.key === "z") {
        document.getElementById("capybara").src = capybara.src.replace("src/capybaraawake.png", "src/capybaraasleep.png");
    }
    //if s is clicked, capybara stands up
    if(event.key === "s"){
        document.getElementById("capybara").scr = capybara.src.replace("src/capybaraawake.png", "src/capybarastand.png")
    }
   

});
