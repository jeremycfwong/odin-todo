import {renderHeader} from './DOM/header'
import { renderSideBar } from "./DOM/sidebar";
import TodoLists from "./Objects/TodoLists";
import {renderContent} from "./DOM/content"
import { loadData } from "./Services/Storage";
import './style.css'

if(!localStorage.getItem('masterTodo')){
    var masterTodo = new TodoLists()
} else {
    var masterTodo = loadData()
}

renderHeader()
renderSideBar()
renderContent('General')

export {masterTodo}