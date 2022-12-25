import { test } from ".."
import Project from "../Objects/Project"

function addProject(name) {
    if (name == ''){
        alert ('Project should not be empty!')
    } else if (test.findList(name)){
        alert ('Project Already exist... Please use another name!')
    } else {
        test.addList(new Project(name))
    }
}

export {addProject}