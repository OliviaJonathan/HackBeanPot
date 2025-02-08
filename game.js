function awake(){
    console.log("Awake");
    // first time waking up capybara
    document.getElementById("capybara").src = capybara.src.replace("src/capybaraasleep.png", "src/capybaraawake.png");
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

});
