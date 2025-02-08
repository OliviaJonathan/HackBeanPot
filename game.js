function awake(){
    console.log("Awake");
    document.getElementById("capybara").src = capybara.src.replace("src/capybaraasleep.png", "src/capybaraawake.png");
}