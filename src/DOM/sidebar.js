import { renderContent } from "./content"
import { addProject } from "../Services/addProject"
import { masterTodo } from ".."
import { saveData } from "../Services/Storage"
import { iconHandler } from "../Services/iconHandler"

function renderSideBar(){
    var sidebar = document.getElementById('sidebar')

    var homeHeading = createHeading('Home')

    
    var general = document.createElement('div')

    var taskOverview = createDiv('general-task', 'General')
    var todayTask = createDiv('today-task', 'Task Today')
    var weekTask = createDiv('week-task', 'This Week')

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

    var addProject = document.createElement('div')
    var addProjectButton = document.createElement('div')

    var addProjectIcon = document.createElement('div')
    var svg = iconHandler('Add')
    

    addProjectIcon.innerHTML = svg
    addProjectIcon.setAttribute('class', 'sidebar-icon')

    addProject.setAttribute('class', 'sidebar-item add')
    addProjectButton.textContent = 'New Projects'
    addProject.addEventListener('click', (_) => {
        toggleNewProject()
        toggleSelected(addProject)
    })

    addProject.replaceChildren(addProjectIcon,addProjectButton)

    var newProject = newProjectInput()

    projectItems.appendChild(addProject)
    projectItems.appendChild(newProject)

    sidebar.replaceChildren(homeHeading, general, projectHeading, projectItems)
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
    var icon = document.createElement('div')
    icon.setAttribute('class', 'sidebar-icon')
    var svg = iconHandler(textContent)
    icon.innerHTML = svg

    var text = document.createElement('div')
    
    text.textContent = textContent

    var div = document.createElement('div')
    div.replaceChildren(icon, text)
    div.setAttribute('id', id)
    div.setAttribute('class', 'sidebar-item general')
    div.addEventListener('click', (_) => {
        toggleSelected(div)
        renderContent(textContent)
    })

    return div
}


function newProjectInput() {
    var inputSection = document.createElement('div')
    inputSection.setAttribute('id', 'sidebar-input-section')
    inputSection.setAttribute('class', 'hidden')
    var input = document.createElement('input')
    input.setAttribute('id', 'sidebar-input')

    var buttonContainer = document.createElement('div')
    buttonContainer.setAttribute('id', 'sidebar-btn-container')

    var confirmButton = document.createElement('div')
    confirmButton.setAttribute('id', 'sidebar-add-confirm')
    confirmButton.textContent = 'Add'
    confirmButton.addEventListener('click', (_) => {
        addProject(input.value)
        renderSideBar()
    })

    var cancelButton = document.createElement('div')
    cancelButton.setAttribute('id', 'sidebar-add-cancel')
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
    var project = document.createElement('div')
    project.setAttribute('class', 'sidebar-item project')
    

    var icon = document.createElement('div')
    icon.setAttribute('class', 'sidebar-icon')
    var gSVG = iconHandler(title)
    icon.innerHTML = gSVG

    var projectElement = document.createElement('div')
    projectElement.textContent = title

    projectElement.addEventListener('click', (e) => {
        if(e.target.id != 'project-remove'){
            toggleSelected(project)
            renderContent(title)
        }
    })


    var removeButton = document.createElement('div')
    removeButton.setAttribute('id', 'project-remove')
    removeButton.setAttribute('class', 'hidden')
    removeButton.textContent = 'X'
    removeButton.addEventListener('click', (_) => {
        masterTodo.removeProject(title)
        saveData()
        renderSideBar()
    })

    project.addEventListener('mouseover', (_) => {
        removeButton.setAttribute('class', '')
    })

    project.addEventListener('mouseout', (_) => {
        removeButton.setAttribute('class', 'hidden')
    })


    project.replaceChildren(icon, projectElement,removeButton)

    return project
}

function toggleSelected(selected){
    var generalItems = document.querySelectorAll('.sidebar-item')
    
    generalItems.forEach((item) => item.classList.remove('active'))

    selected.classList.add('active')
}

export {renderSideBar, toggleSelected}