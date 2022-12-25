import { masterTodo } from ".."
import Project from "../Objects/Project"

function addProject(name) {
    if (name == ''){
        alert ('Project should not be empty!')
    } else if (masterTodo.findList(name)){
        alert ('Project Already exist... Please use another name!')
    } else {
        masterTodo.addList(new Project(name))
    }
}

export {addProject}