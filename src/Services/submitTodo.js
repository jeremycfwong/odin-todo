import TodoItem from "../Objects/TodoItem"
import { masterTodo } from ".."
import {format} from 'date-fns'

function submitItem (project, action, origin = null) {
    var title = document.getElementById('detailTitle').value
    var description = document.getElementById('detailDescription').value
    var dueDate = document.getElementById('detailDate').value
    if (dueDate != ''){
        dueDate = new Date(document.getElementById('detailDate').value)
    }
    
    var priority = document.getElementById('priorityList')
    var priorityValue = priority.options[ priority.selectedIndex ].value 

    var item = new TodoItem(title,description,dueDate, priorityValue, false)
    

    if (action == "create"){
        masterTodo.getList(project).addItem(item)
    } else {
        masterTodo.getList(project).updateItem(item, origin)
    }

}

export {submitItem}