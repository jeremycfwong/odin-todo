import {test} from '../index'

function renderContent(project){
    var content = document.getElementById('content')

    var heading = document.createElement('h1')
    heading.setAttribute('id','contentHeading')
    heading.textContent = project

    content.replaceChildren(heading)

    for (var item in test.getList(project).getTodoItems()){
        content.appendChild(renderTodo(test.getList(project).getTodoItems()[item]))
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

export {renderContent}