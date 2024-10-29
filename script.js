let meuMenu = document.querySelector(".links")
let background =document.querySelector(".menuButton")

meuMenu.style.maxHeight = "0px"

function showMenu() {

    if(meuMenu.style.maxHeight === "0px") {
        meuMenu.style.maxHeight = "120px"
        background.style.backgroundColor = "#d3ad7f"
    } else {
        meuMenu.style.maxHeight = "0px"
        background.style.backgroundColor = "#FFF"
    }

}