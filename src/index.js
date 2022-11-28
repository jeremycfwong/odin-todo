import {TodoItem} from "./TodoItem";
import {Project} from "./Project";

var item = new TodoItem('hi','yoyoyo','today', 'urgent', true)

var project = new Project('hi Project')

project.addItem(item)

console.log(project)