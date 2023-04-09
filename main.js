var numtask = prompt("How many tasks do you have today?");
var tasks = new Array();

for(var i = 0; i<numtask; i++){
    tasks.push(prompt("Enter Task")); 
}

let list = document.getElementById("task-list");

for (var i = 0; i <tasks.length; i++) {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(tasks[i]));
    item.setAttribute("id", "list-item-" + (i+1));     
    list.appendChild(item);
}

var doneButton = document.getElementById("task-button");
doneButton.addEventListener("click", complete);

function complete() {
    var tasknum = prompt("Which task number did you complete?");
    var taskelem = document.getElementById("list-item-" + tasknum);
    taskelem.style.backgroundImage = "url('assets/CheckedBox.png')";
    var rannum = Math.floor((Math.random()*25) + 1);    // 1-25
    while (document.getElementById("thing-" + rannum).getAttribute("src") != "assets/unnamed.png" ){
        rannum = Math.floor((Math.random()*25) + 1);  
    }
    var ranhouse = Math.floor((Math.random()*3) + 1); 
    if (ranhouse === 1){
        for (var i = 1; i<28; i++){
            var image = document.getElementById("thing-" + rannum);
            var name = ("assets/first-block-" + i + ".png.png");   // more debugging
            setTimeout(function(){image.setAttribute("src", name)}, 9000); 
        }
    }
    if (ranhouse === 2){
        for (var i = 28; i<39; i++){
            var image = document.getElementById("thing-" + rannum);
            var name = ("assets/first-block-" + i + ".png.png");   // more debugging
            setTimeout(function(){image.setAttribute("src", name)}, 9000); 
        }
    }
    if (ranhouse === 3){
        for (var i = 39; i<50; i++){
            var image = document.getElementById("thing-" + rannum);
            var name = ("assets/first-block-" + i + ".png.png");   // more debugging
            setTimeout(function(){image.setAttribute("src", name)}, 9000); 
        }
    }

    if(check()){
        win();
    }
}

function check(){
    // Loop through all tasks number, and check to see if they are equal to CheckedBox.
    // If all === CheckedBox then run win condition function
    for (var i = 0; i <tasks.length; i++) {
        var item = document.getElementById("list-item-" + (i+1)); 
        var value2Check = getComputedStyle(item);
        var backgroundValue = value2Check.backgroundImage;
        if(backgroundValue === "url('assets/UncheckedBox.png')"){
            return false;
        }
    }
    return true;
}

function win(){
    // Turn all houses to their respective value shiny sprite (1, 2, 3) house type 
}
