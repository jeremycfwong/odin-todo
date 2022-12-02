import TodoItem from "./Objects/TodoItem";
import Project from "./Objects/Project";
import {renderHeader} from './DOM/header'
import { renderSideBar } from "./DOM/sidebar";
import './style.css'
import TodoLists from "./Objects/TodoLists";

renderHeader()
renderSideBar()

var item = new TodoItem('hi','yoyoyo','today', 'urgent', true)
var item2 = new TodoItem('hizzz','yoyoyo','today', 'urgent', true)

var project = new Project('hi Project')

project.addItem(item)

var test = new TodoLists()

test.updateList(test.getList('General'),item)


console.log(test)