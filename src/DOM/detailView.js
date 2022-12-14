import { renderContent } from "./content"
import { submitItem } from "../Services/submitTodo"

function renderDetail(project, item = null){
    var content = document.getElementById('content')

    var heading = document.createElement('h1')
    heading.setAttribute('id','contentHeading')
    heading.textContent = 'Detail View'

    var title = document.createElement('input')
    title.setAttribute('id', 'detailTitle')
    title.setAttribute('value', 'Testing Item')

    var description = document.createElement('textarea')
    description.setAttribute('id', 'detailDescription')
    description.value = "Testing Item many good"

    var dueDate = document.createElement('input')
    dueDate.setAttribute('id', 'detailDate')
    dueDate.setAttribute('type', 'date')

    var priority = createPriorityList()

    var submit = document.createElement('div')
    submit.setAttribute

    if (item){
        title.setAttribute('value', item.getTitle())
        description.value = item.getDescription()
        // priority

        submit.textContent = "Update Todo"
        submit.addEventListener('click', (_) => {
            submitItem(project, "update", item.getTitle())
            renderContent('General')
        } )
    } else {
        submit.textContent = "Add New Todo"
        submit.addEventListener('click', (_) => {
            submitItem(project, "create")
            renderContent('General')
        } )
    }

    content.replaceChildren(heading, title,description, dueDate, priority, submit)
}


function createPriorityList(){
    var priority = document.createElement('select')
    priority.setAttribute('id', 'priorityList')

    var p1 = document.createElement('option')
    p1.value = "Low"
    p1.textContent = "Low"
    var p2 = document.createElement('option')
    p2.value = "Medium"
    p2.textContent = "Medium"
    var p3 = document.createElement('option')
    p3.value = "High"
    p3.textContent = "High"

    priority.replaceChildren(p1,p2,p3)

    return priority
}




export {renderDetail}