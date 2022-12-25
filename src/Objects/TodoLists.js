const { default: Project } = require("./Project")


export default class TodoLists{
    constructor(){
        this.todoLists = []
        this.todoLists.push(new Project('General'))
        this.todoLists.push(new Project('Demo'))
        this.todoLists.push(new Project('Demo2'))
    }

    setProjects(projects) {
        this.todoLists = projects
    }

    getProject(listName){
        return this.todoLists.find((item) => item.getName() === listName)
    }

    findProject(name){
        return Boolean(this.todoLists.find((item) => item.getName() == name))
    }

    addList(project) {
        this.todoLists.push(project)
    }

    getAllProject(){
        return this.todoLists
    }

    removeProject(name){
        this.todoLists = this.todoLists.filter((item) => item.getName() != name)
    }
}