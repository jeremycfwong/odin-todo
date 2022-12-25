import {test} from '../index'
import { renderDetail } from './detailView'

function renderContent(project){
    var content = document.getElementById('content')

    var heading = document.createElement('h1')
    heading.setAttribute('id','contentHeading')
    heading.textContent = project

    var addButton = createAddButton(project)

    content.replaceChildren(heading,addButton)

    if (project == 'Task Today'){
        var contentList = test.getList('General').getToday()
    } else if (project == 'This Week'){
        var contentList = test.getList('General').getWeek()
    } else {
        var contentList = test.getList(project).getTodoItems()
    }

    for (var item in contentList){
        content.appendChild(renderTodo(contentList[item], project))
    }
}

function renderTodo(item, project){
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
    
    todoItem.addEventListener('click', (_) => {
        renderDetail(project, item)
    })
    return todoItem
}

function createAddButton(project){
    var add = document.createElement('div')
    add.setAttribute('id', 'addButton')
    add.textContent = "+"


    add.addEventListener('click', (_) => {
        renderDetail(project)
    })

    return add
}

export {renderContent}