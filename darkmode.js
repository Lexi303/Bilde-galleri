// Black mode
function darkLightMode(){
    let togglebuton = document.querySelector("#togglebutton")
    console.log(togglebutton);
    let body = document.querySelector("body");
    console.log(body);
    
    body.classList.toggle("dark")
    }
    
    togglebutton.addEventListener("click", darkLightMode);