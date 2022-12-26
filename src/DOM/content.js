import {masterTodo} from '../index'
import { saveData } from '../Services/Storage'
import { renderDetail } from './detailView'

function renderContent(project){
    var content = document.getElementById('content')

    var heading = document.createElement('h1')
    heading.setAttribute('id','contentHeading')
    heading.textContent = project

    var sectionTitle = renderSectionTitle()


    var addButton = createAddButton(project)

    content.replaceChildren(heading, sectionTitle)

    if (project == 'Task Today'){
        var contentList = masterTodo.getProject('General').getToday()
        project = 'General'
    } else if (project == 'This Week'){
        var contentList = masterTodo.getProject('General').getWeek()
        project = 'General'
    } else {
        var contentList = masterTodo.getProject(project).getTodoItems()
    }

    for (var item in contentList){
        content.appendChild(renderTodo(contentList[item], project))
    }

    content.appendChild(addButton)
}

function renderTodo(item, project){
    var todoItem = document.createElement('div')
    todoItem.setAttribute('class', 'content-todo')

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
    
    var deleteButton = document.createElement('button')
    deleteButton.setAttribute('id', 'delete-button')
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', (_) => {
        masterTodo.getProject(project).deleteTodoItem(item.getTitle())
        saveData()
        renderContent('General')
    })


    todoItem.replaceChildren(todoTitle,dueDate,priority, deleteButton,completed)
    
    todoItem.addEventListener('click', (e) => {
        if (e.target.tagName != "BUTTON" && e.target.tagName != "INPUT"){
            renderDetail(project, item)
        }
    })
    return todoItem
}

function createAddButton(project){
    var add = document.createElement('div')
    add.setAttribute('id', 'content-add-button')
    add.textContent = "+ Add Todo"


    add.addEventListener('click', (_) => {
        renderDetail(project)
    })

    return add
}

function renderSectionTitle() {
    var section = document.createElement('div')
    section.setAttribute('class', 'content-todo heading')

    var sectionTitle = document.createElement('div')
    sectionTitle.textContent = 'Todo Item'
    
    var dateTitle = document.createElement('div')
    dateTitle.textContent = 'Due Date'

    var prioTitle = document.createElement('div')
    prioTitle.textContent = 'Priority'

    var deleteTitle = document.createElement('div')
    deleteTitle.setAttribute('class', 'content-todo-delete')
    deleteTitle.textContent = 'Delete'

    var completeTitle = document.createElement('div')
    completeTitle.setAttribute('class', 'content-todo-completed')
    completeTitle.textContent = 'Completed?'

    section.replaceChildren(sectionTitle, dateTitle, prioTitle, deleteTitle, completeTitle)

    return section
}

export {renderContent}