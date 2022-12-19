console.log("ten kod jest już w repozytorium Git.");


let button = document.querySelector(".js-button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    
    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});


