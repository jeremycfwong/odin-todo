import TodoItem from "../Objects/TodoItem"
import { test } from ".."

function submitItem (project, action, origin) {
    var title = document.getElementById('detailTitle').value
    var description = document.getElementById('detailDescription').value
    var dueDate = document.getElementById('detailDate').value
    var priority = document.getElementById('priorityList')
    var priorityValue = priority.options[ priority.selectedIndex ].value 

    var item = new TodoItem(title,description,dueDate, priorityValue, false)

    if (action == "create"){
        test.getList(project).addItem(item)
    } else {
        test.getList(project).updateItem(item, origin)
    }


    console.log(test)
}

export {submitItem}