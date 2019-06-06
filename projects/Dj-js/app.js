var djbox = document.getElementById("box");
var heading = document.getElementById("heading");

    


djbox.style.height="500px";
djbox.style.width="500px";
djbox.style.backgroundColor="voilet";

djbox.addEventListener("mouseover", function(){
    djbox.style.backgroundColor = "blue";
    heading.style.color = "lightblue";
    
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

