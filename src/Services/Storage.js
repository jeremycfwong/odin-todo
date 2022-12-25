import { masterTodo } from "..";

function saveData(){
    var payload = JSON.stringify(masterTodo)
    localStorage.setItem('masterTodo', payload)
    console.log(JSON.parse(localStorage.getItem('masterTodo')))
    
}

function loadData(){
    return JSON.parse(localStorage.getItem('masterTodo'))
}

export {saveData, loadData}