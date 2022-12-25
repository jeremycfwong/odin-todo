const { default: Project } = require("./Project")

export default class TodoLists{
    constructor(){
        this.todoLists = []
        this.todoLists.push(new Project('General'))
        this.todoLists.push(new Project('Task Today'))
        this.todoLists.push(new Project('This Week'))
        this.todoLists.push(new Project('Demo'))
        this.todoLists.push(new Project('Demo2'))
    }

    getList(listName){
        return this.todoLists.find((item) => item.getName() === listName)
    }

    updateList(project, todoItem){
        this.todoLists.find((item) => item.getName() === project.getName()).addItem(todoItem)
    }

    findList(name){
        return Boolean(this.todoLists.find((item) => item.getName() == name))
    }

    addList(project) {
        this.todoLists.push(project)
    }

    getAllList(){
        return this.todoLists
    }
}