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

function complete() {
    var tasknum = prompt("Which task number did you complete?");
    var taskelem = document.getElementById("list-item-" + tasknum);
    taskelem.style.backgroundImage = "url('assets/CheckedBox.png')";
    var rannum = Math.random(1,25); 
}

var doneButton = document.getElementById("task-button");
doneButton.addEventListener("click", complete);
