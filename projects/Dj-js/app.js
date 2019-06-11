var djbox = document.getElementById("box");
var heading = document.getElementById("heading");

    


djbox.style.height="400px";
djbox.style.width="400px";
djbox.style.backgroundColor="voilet";

djbox.addEventListener("mouseover", function(){
    djbox.style.backgroundColor = "blue";
    heading.style.color = "darkblue";
    
})

djbox.addEventListener("mouseleave", function(){
    djbox.style.backgroundColor = "lightslategrey"
    heading.style.color = "lightslategrey"
})

djbox.addEventListener("mousedown", function(){
    djbox.style.backgroundColor = "red"
    heading.style.color = "Crimson"
    
      
})

djbox.addEventListener("mouseup", function(){
    djbox.style.backgroundColor = "yellow"
    heading.style.color = "goldenrod"

})

djbox.addEventListener("dblclick", function(){
    djbox.style.backgroundColor = "limegreen"
    heading.style.color = "green"
})

window.addEventListener("wheel", function(){
    djbox.style.backgroundColor = "Orange"
    heading.style.color = "Orange"
})

window.addEventListener("keydown", function(event){
    if(event.which === 66){
    box.style.backgroundColor = "blue"
    heading.style.color = "pink"
} else if(event.which === 82){
    box.style.backgroundColor = "red"
    heading.style.color = "lightblue"
} else if(event.which === 71){
    box.style.backgroundColor = "green"
    heading.style.color = "yellow"
} else if(event.which === 79){
    box.style.backgroundColor = "orange"
    heading.style.color = "purple"
} else if (event.which === 89){
    box.style.backgroundColor = "yellow"
    heading.style.color = "aqua"
}

    // keydown 66 = b (use for Blue)
    // keydown  82 = r (use for Red)
    // keydown 71 = g (use for Green)
    // keydown 79 = o (use for Orange)
    // keydown 89 =y (use for Yellow)
})
