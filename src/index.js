import TodoItem from "./Objects/TodoItem";
import Project from "./Objects/Project";
import {renderHeader} from './DOM/header'
import { renderSideBar } from "./DOM/sidebar";
import './style.css'

renderHeader()
renderSideBar()

var item = new TodoItem('hi','yoyoyo','today', 'urgent', true)

var project = new Project('hi Project')

project.addItem(item)

console.log(project)