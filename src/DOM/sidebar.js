import { renderContent } from "./content"

function renderSideBar(){
    var sidebar = document.getElementById('sidebar')

    var homeHeading = createHeading('Home')

    var taskOverview = createDiv('generalTasks', 'General Tasks')
    taskOverview.addEventListener('click', (_) => {
        taskOverview.setAttribute('class', 'selected')
        renderContent('General')
    })

    var todayTask = createDiv('todayTask', 'Task Today')
    todayTask.addEventListener('click', (_) => {
        todayTask.setAttribute('class', 'selected')
        renderContent('Task Today')
    })

    var weekTask = createDiv('weekTask', 'This Week')
    weekTask.addEventListener('click', (_) => {
        weekTask.setAttribute('class', 'selected')
        renderContent('This Week')
    })

    var projectHeading = createHeading('Projects')

    var projectDemo = document.createElement('div')
    projectDemo.textContent = 'Project Demo'

    sidebar.replaceChildren(homeHeading, taskOverview, todayTask, weekTask, projectHeading, projectDemo)
}

function createHeading(textContent){
    var heading = document.createElement('div')
    heading.setAttribute('class', 'section-heading')
    heading.textContent = textContent

    var line = document.createElement('div')
    line.setAttribute('class', 'line')

    heading.appendChild(line)
    return heading
}

function createDiv(id, textContent){
    var div = document.createElement('div')
    div.setAttribute('id', id)
    div.setAttribute('class', 'sidebar-item')
    div.textContent = textContent
    return div
}



export {renderSideBar}