console.log("js is connected");
const navbar = document.getElementById("nav")
const element = document.getElementById("down")
const btn = document.getElementById("button-green")
const down=element.offsetTop - 100
function change()
{
    const scroll = window.scrollY
    console.log(scroll)
    console.log(down)
    if(scroll>down){
        navbar.style.backgroundColor="#ffffff"
        btn.style.backgroundColor = "#1a8917"
    }
    else{
        navbar.style.backgroundColor="#FFC017"
        btn.style.backgroundColor = "#000000"
    }
}
window.addEventListener("scroll",change)