// ..................................TODO-LIST APPLICATION.................................................
// Installation
import inquirer from "inquirer";
import chalk from "chalk";
// //Code...
// let todo_list : string [] = [];
// let conditi_ons = true;
// console.log (chalk.white.bold("\n \t Welcome to Musfira's Todo-List Apllication\n"))
// //  while (conditi_ons){
// //      let add_task = await inquirer.prompt([
// //          {
// //              name : "task",
// //              type : "input",
// //              message : chalk.blue.italic("Enter a new task!")
// //          }
// //      ]);
// //     todo_list.push (add_task.task)
// //      console.log(`${add_task.task} New task added in Todo-list!`)
// //      let more_task =await inquirer.prompt ([
// //          {
// //              name: "addmore",
// //              type: "confirm",
// //              message: chalk.blue.italic("You wanna add more tasks?"),
// //              default: "FALSE",
// //          }
// //     ]);
// //      conditi_ons = more_task.addmore
// //  };
// //  console.log (chalk.white.bold("Your Todo-list has updated!", todo_list));
// let main = async () => {
//     while  (conditi_ons){
//         let option = await inquirer.prompt([
//             {
//                 name: "Choice",
//                 type: "list",
//                 message: "Select an option:",
//                 choices : ["Add Task","Update Task","Delete Task","View the list", "Exit"],
//             }
//         ]);
//         if (option.choice === "Add Task"){
//             await addTask()
//         }
//         else if (option.choice === "View the list"){
//             await viewtsk ()
//             }
//     };
// };
// // (Function: add task)
// let addTask = async () => {
//     let newtask = await inquirer.prompt([
//         {
//             name : "task",
//             type : "input",
//             message : "Enter your new task!"
//         }
//     ]);
//     todo_list.push(newtask.task);
//     console.log (
//         `\n ${newtask.task} task added successfully!`
//     );
// }
// // (Function: View the list)
// let viewtsk = () => {
//     console.log ("\n Your Todo-List: \n");
//     todo_list.forEach ((task, index) => {
//         console.log (`${index}: ${task}`)
//     });
// };
// main();
let to_do = ["Coding", "Watching Netflix", "workout"];
async function maketodo(list) {
    let ans = await inquirer.prompt({
        type: "list",
        name: "TodoList",
        message: chalk.blueBright.italic("Select the operation"),
        choices: ["Add Task", "view Task", "Update", "Delete task"],
    });
    if (ans.TodoList === "Add Task") {
        let add = await inquirer.prompt({
            type: "input",
            name: "todo",
            message: chalk.blueBright.italic("Do you wanna add a new task?"),
        });
        to_do.push(add.todo);
        console.log(to_do);
    }
    if (ans.TodoList === "view Task") {
        console.log(chalk.magentaBright.bold("***** [mu5f1r-todo-list-app] *****"));
        console.log(to_do);
    }
    ;
    if (ans.TodoList === "Update") {
        let update = await inquirer.prompt({
            type: "input",
            name: "update",
            message: chalk.greenBright.italic("Select the item to update!"),
            choices: to_do.map(item => item),
        });
        let add = await inquirer.prompt({
            type: "input",
            name: "todo",
            message: chalk.blueBright.italic("Do you wanna add a new task?"),
        });
        let newtodo = to_do.filter(val => val === update.update);
        to_do = [...newtodo, add.todo];
        console.log(to_do);
    }
    if (ans.TodoList === "Delete Task") {
        let delitem = await inquirer.prompt({
            type: "input",
            name: "delete",
            message: chalk.red.italic("Select the item to delete!"),
            choices: to_do.map(item => item),
        });
        let newtodo = to_do.filter(val => val === delitem.delete);
        to_do = [...newtodo, delitem.delete];
        console.log(to_do);
    }
    ;
}
maketodo(to_do);
