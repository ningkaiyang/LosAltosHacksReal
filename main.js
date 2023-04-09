var numtask = prompt("How many tasks do you have today?");
var tasks = new Array();
var completecount = 1; 

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

function buildhouse(){
    var rannum = Math.floor((Math.random()*25) + 1);    // 1-25
    while (document.getElementById("thing-" + rannum).getAttribute("src") != "assets/unnamed.png" ){
        rannum = Math.floor((Math.random()*25) + 1);  
    }
    var ranhouse = Math.floor((Math.random()*3) + 1);
    if (ranhouse === 1){
        var incrementer = 1;
        intervalId = setInterval(displayNext, 200);

        function stop(){
            clearInterval(intervalId);
        }

        function displayNext(){
            var image = document.getElementById("thing-" + rannum);
            var name = ("assets/first-block-" + incrementer + ".png.png");
            image.setAttribute("src", name);
            if (incrementer >= 27){
                stop();
            }
            incrementer++;
        }
        completecount++;
    }
    if (ranhouse === 2){ 
        var incrementer = 28;
        intervalId = setInterval(displayNext, 200);

        function stop(){
            clearInterval(intervalId);
        }

        function displayNext(){
            var image = document.getElementById("thing-" + rannum);
            var name = ("assets/first-block-" + incrementer + ".png.png");
            image.setAttribute("src", name);
            if (incrementer >= 38){
                stop();
            }
            incrementer++;
        }
        completecount++;
    }
    if (ranhouse === 3){
        var incrementer = 39;
        intervalId = setInterval(displayNext, 200);

        function stop(){
            clearInterval(intervalId);
        }

        function displayNext(){
            var image = document.getElementById("thing-" + rannum);
            var name = ("assets/first-block-" + incrementer + ".png.png");
            image.setAttribute("src", name);
            if (incrementer >= 49){
                stop();
            }
            incrementer++;
        }
        completecount++;
    }
}

function complete() {
    var tasknum = prompt("Which task number did you complete?");
    var taskelem = document.getElementById("list-item-" + tasknum);
    taskelem.style.backgroundImage = "url('assets/CheckedBox.png')";
    console.log(check());
    if(check()){
        console.log("Timeout TEST?!?!?!!?!?");
        setTimeout(win(), 5000);
    }
    buildhouse();
}

function check(){
    console.log(completecount);
    if(completecount === tasks.length){
        return true;
    }
    else{
        return false;
    }
}

function win(){
    // Turn all houses to their respective value shiny sprite (1, 2, 3) house type
    for (var i = 1; i<26; i++){
        console.log(i);
        var img = document.getElementById("thing-" + i);
        var src = img.getAttribute("src");
        if (src === "assets/first-block-27.png.png"){
            console.log('Funny monkey');
            img.setAttribute("src", "assets/ezgif-3-887a01b628.gif")
        }
        else if (src === "assets/first-block-38.png.png"){
            console.log('Funny monkey');
            img.setAttribute("src", "assets/ezgif-3-32116975a.gif")
        }
        else if (src === "assets/first-block-49.png.png"){
            console.log('Funny monkey');
            img.setAttribute("src", "assets/ezgif-3-fdbfaea6c1.gif")
        }
    } 
}
