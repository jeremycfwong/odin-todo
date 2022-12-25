import { renderContent } from "./content"
import { addProject } from "../Services/addProject"
import { masterTodo } from ".."
import { saveData } from "../Services/Storage"

function renderSideBar(){
    var sidebar = document.getElementById('sidebar')

    var homeHeading = createHeading('Home')

    var general = document.createElement('div')

    var taskOverview = createDiv('generalTasks', 'General')
    var todayTask = createDiv('todayTask', 'Task Today')
    var weekTask = createDiv('weekTask', 'This Week')
    general.replaceChildren(taskOverview, todayTask, weekTask)

    var projectHeading = createHeading('Projects')

    var projectList = masterTodo.getAllProject()
    var projectItems = document.createElement('div')
    for (var project in projectList){
        var title = projectList[project].getName()

        if (!['General','Task Today', 'This Week'].includes(title)){
            projectItems.appendChild(createProjectItem(title))
        }
    }

    var addProjectButton = document.createElement('div')
    addProjectButton.setAttribute('id', 'sidebarAdd')
    addProjectButton.textContent = '+'
    addProjectButton.addEventListener('click', toggleNewProject)

    var newProject = newProjectInput()

    sidebar.replaceChildren(homeHeading, general, projectHeading, projectItems, 
        addProjectButton, newProject)
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

    div.setAttribute('class', 'sidebar-item-general')
    div.addEventListener('click', (_) => {
        toggleSelected(div)
        renderContent(textContent)
    })

    return div
}


function newProjectInput() {
    var inputSection = document.createElement('div')
    inputSection.setAttribute('id', 'sidebar-input-section')
    var input = document.createElement('input')
    input.setAttribute('id', 'projectName')

    var buttonContainer = document.createElement('div')
    buttonContainer.setAttribute('id', 'button-container')

    var confirmButton = document.createElement('div')
    confirmButton.setAttribute('id', 'button-add-confirm')
    confirmButton.textContent = 'Add'
    confirmButton.addEventListener('click', (_) => {
        addProject(input.value)
        renderSideBar()
    })

    var cancelButton = document.createElement('div')
    cancelButton.setAttribute('id', 'button-cancel')
    cancelButton.textContent = 'Cancel'
    cancelButton.addEventListener('click', (_) => {
        input.value = ''
        toggleNewProject()
    })

    buttonContainer.replaceChildren(confirmButton, cancelButton)
    inputSection.replaceChildren(input, buttonContainer)

    return inputSection
}

function toggleNewProject() {
    var inputSection = document.getElementById('sidebar-input-section')
    inputSection.classList.toggle("hidden")
}

function createProjectItem(title) {
    var projectElement = document.createElement('div')
    projectElement.textContent = title
    projectElement.setAttribute('class', 'sidebar-item-project')

    projectElement.addEventListener('click', (e) => {
        if(e.target.id != 'project-remove'){
            toggleSelected(projectElement)
            renderContent(title)
        }
    })

    var removeButton = document.createElement('div')
    removeButton.setAttribute('id', 'project-remove')
    removeButton.textContent = 'X'
    removeButton.addEventListener('click', (_) => {
        masterTodo.removeProject(title)
        saveData()
        renderSideBar()
    })

    projectElement.appendChild(removeButton)

    return projectElement
}

function toggleSelected(selected){
    var generalItems = document.querySelectorAll('.sidebar-item-general')
    var projectItems = document.querySelectorAll('.sidebar-item-project')
    
    generalItems.forEach((item) => item.classList.remove('active'))
    projectItems.forEach((item) => item.classList.remove('active'))

    selected.classList.add('active')
}

export {renderSideBar}