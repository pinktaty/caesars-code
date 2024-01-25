var language = new XMLHttpRequest();
var hash;

function loadLanguage(){
    let data = JSON.parse(language.responseText);
    document.querySelector(".welcome").innerHTML = data.welcome;
    document.title = data.title;
    location.hash = hash;
}

function changeLanguage(lan){
    switch (lan) {
        case "es":
            language.open('GET', './assets/json/espaniol.json', true);
            hash = "es";
            break;
        case "en":
            language.open('GET', './assets/json/english.json', true);
            hash = "en";
            break;
        case "no":
            language.open('GET', './assets/json/norsk.json', true);
            hash = "no"
            break;
    }
    language.send();
    language.onload = function () {
        loadLanguage();
    }
}

changeLanguage("es");