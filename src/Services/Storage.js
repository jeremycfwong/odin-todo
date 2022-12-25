import { masterTodo } from "..";
import Project from "../Objects/Project";
import TodoItem from "../Objects/TodoItem";
import TodoLists from "../Objects/TodoLists";

function saveData(){
    var payload = JSON.stringify(masterTodo)
    localStorage.setItem('masterTodo', payload)
    console.log(JSON.parse(localStorage.getItem('masterTodo')))
    
}

function loadData(){
    var loadData = Object.assign(new TodoLists(), JSON.parse(localStorage.getItem('masterTodo')))

    loadData.setProjects(
        loadData
        .getAllProject()
        .map((project) => Object.assign(new Project(), project))
    )

    loadData
    .getAllProject()
    .forEach((project) => 
        project.setTasks(
        project.getTodoItems().map((task) => Object.assign(new TodoItem(), task))
    ));

    return loadData
}

export {saveData, loadData}