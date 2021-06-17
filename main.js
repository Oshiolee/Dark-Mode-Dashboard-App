const icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "./images/Light.png";
    } else{
        icon.src = "./images/Dark.png";
    }
};