function renderSideBar(){
    var sidebar = document.getElementById('sidebar')

    var homeHeading = createHeading('Home')

    var taskOverview = document.createElement('div')
    taskOverview.setAttribute('id', 'taskOverview')
    taskOverview.textContent = 'Task Overview'

    var todayTask = document.createElement('div')
    todayTask.setAttribute('id', 'todayTask')
    todayTask.textContent = 'Task Today'

    var weekTask = document.createElement('div')
    weekTask.setAttribute('id', 'weekTask')
    weekTask.textContent = 'This Week'

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


export {renderSideBar}