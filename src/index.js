import TodoItem from "./Objects/TodoItem";
import Project from "./Objects/Project";
import {renderHeader} from './DOM/header'
import { renderSideBar } from "./DOM/sidebar";
import './style.css'
import TodoLists from "./Objects/TodoLists";
import {renderContent} from "./DOM/content"
import { loadData } from "./Services/Storage";

if(!localStorage.getItem('masterTodo')){
    var masterTodo = new TodoLists()
} else {
    var masterTodo = Object.assign(new TodoLists(), loadData())

    masterTodo.setLists(
        masterTodo
        .getAllList()
        .map((project) => Object.assign(new Project(), project))
    )

    masterTodo
    .getAllList()
    .forEach((project) => 
        project.setTasks(
        project.getTodoItems().map((task) => Object.assign(new TodoItem(), task))
    ));

}

renderHeader()
renderSideBar()
renderContent('General')

export {masterTodo}