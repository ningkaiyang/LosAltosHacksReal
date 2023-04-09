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
    var rannum = Math.random(1,25); 
    for (var i = 1; i<28; i++){
        var image = document.getElementById("thing-" +rannum);
        image.setAttribute("src", "assets/first-block-" + i + ".png.png");
        setTimeout(1000);
    }

    // Loop through all tasks number, and check to see if they are equal to CheckedBox.
    // If all === CheckedBox then run win condition function
}

function win(){
    // To be made
}
