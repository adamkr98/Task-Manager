// MY TASK MANAGER - TERMINAL

// SETUP CODE
// const fs = require('fs');
// const readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);

// let tasks = ["task1", "task2", "task3"]


// const showtasks = () => {
//     console.log(tasks)
// }

// showtasks()

// EXEMPLE
// rl.question('What is your age? ', (age) => {
//     console.log('Your age is: ' + age);
//     rl.close();
// });




const prompt = require("prompt-sync")();

const TASKS = ["Task1", "Task2", "Task3", ];


function addTask() {
  
   let input = prompt("Insert a new task: ");

   TASKS.push(input);
   console.log(TASKS);
   openMenu();
}

function removeTask() {
   
    // let input = prompt("Insert the position/ number of the task to be removed: ");
    TASKS.pop();
    console.log(TASKS);
    openMenu();
  
    
}

function exitTaskManager() {
    let input = prompt("Are you sure that you want quit this manager? Y/N ");
    if(input == "Y" ) {
        console.log("You have left the task manager.");
        return
    } else {
        openMenu();
    }
    
}

function markDone() {
    
    console.log(TASKS);
    let input = parseInt(prompt("Whitch task do you want to mark as done?/ Remove it from <done> "));
    let muggle = input -1;
   
    
    if (TASKS[ muggle ].includes(" :done")) {
        TASKS[ muggle ] = TASKS[ muggle ].replace(" :done", "");

    } else if (input >= 1 && input <= TASKS.length) {
        TASKS[ muggle ] += " :done";

    } else {
        console.log("Insert a number from 1 to 5!")
    }   
    console.log(TASKS);
    openMenu();
}



function openMenu() {
    
    console.log("Welcome to your task manager, Press:\n" + "1. to see all your tasks \n" +
    "2. to add a task \n" + "3. to delete a task \n" + "4. to mark a task as done/remove \n" + "5. to Exit the task manager \n")
    const choiceNb = parseInt(prompt(" "));

    if( choiceNb === 1 ) {
        console.log(TASKS);
        openMenu();
    } else if( choiceNb === 2 ) {
        addTask();
    } else if( choiceNb === 3 ) {
        removeTask();
    }   else if(choiceNb === 4 ) {
        markDone();
    }   else if(choiceNb === 5 ) {
        exitTaskManager();
    }
}


openMenu();





