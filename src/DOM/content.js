import {test} from '../index'
import { renderDetail } from './detailView'

function renderContent(project){
    var content = document.getElementById('content')

    var heading = document.createElement('h1')
    heading.setAttribute('id','contentHeading')
    heading.textContent = project

    var addButton = createAddButton()

    content.replaceChildren(heading,addButton)



    var contentList = test.getList(project).getTodoItems()

    for (var item in contentList){
        content.appendChild(renderTodo(contentList[item]))
    }
}

function renderTodo(item){
    var todoItem = document.createElement('div')

    var todoTitle = document.createElement('div')
    todoTitle.textContent = item.getTitle()

    var dueDate = document.createElement('div')
    dueDate.textContent = item.getDueDate()

    var priority = document.createElement('div')
    priority.textContent = item.getPriority()

    var completed = document.createElement('input')
    completed.setAttribute('type','checkbox')
    if (item.getCompleted()){
        completed.checked
    }

    todoItem.replaceChildren(todoTitle,dueDate,priority,completed)
    return todoItem
}

function createAddButton(){
    var add = document.createElement('div')
    add.setAttribute('id', 'addButton')
    add.textContent = "+"


    add.addEventListener('click', (_) => {
        renderDetail()
    })

    return add
}

export {renderContent}