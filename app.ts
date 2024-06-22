// ..................................TODO-LIST APPLICATION.................................................

// Installation
import inquirer from "inquirer";
import chalk from "chalk";

// //Code...
let to_do : string[] = ["Coding", "Watching Netflix","workout"];

async function maketodo (list : string[]){
    let ans = await inquirer.prompt ({
        type: "list",
        name: "TodoList",
        message: chalk.blueBright.italic("Select the operation"),
        choices: ["Add Task", "view Task", "Update", "Delete task"],
    })
    
    if (ans.TodoList === "Add Task"){
        let add = await inquirer.prompt ({
            type : "input",
            name : "todo",
            message : chalk.blueBright.italic("Do you wanna add a new task?"),
        });
        to_do.push (add.todo)
        console.log (to_do )
    }
     if (ans.TodoList === "view Task"){
        console.log (chalk.magentaBright.bold("***** [mu5f1r-todo-list-app] *****"));
    console.log (to_do)
    };
    if (ans.TodoList === "Update"){
        let update = await inquirer.prompt ({
            type : "input",
            name : "update",
            message : chalk.greenBright.italic("Select the item to update!"),
            choices : to_do.map (item => item),
        });
        let add = await inquirer.prompt ({
            type : "input",
            name : "todo",
            message : chalk.blueBright.italic("Do you wanna add a new task?"),
        });
        let newtodo = to_do.filter( 
            val => val! === update.update
        ); 
        to_do = [...newtodo, add.todo];
        console.log (to_do)
    }
    if (ans.TodoList === "Delete Task"){
        let delitem = await inquirer.prompt ({
            type : "input",
            name : "delete",
            message : chalk.red.italic("Select the item to delete!"),
            choices : to_do.map (item => item),
        });
        let newTodo = to_do.filter( 
            val => val! === delitem.delete
        ); 
        to_do = [...newTodo, delitem.delete];
        console.log (to_do);
    };
}
maketodo(to_do);