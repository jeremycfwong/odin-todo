export default class Project {
    constructor(name){
        this.name = name
        this.tasks = []
    }

    addItem(todo) {
        if(this.tasks.find((item) => item.getTitle() === todo.getTitle())) return
        this.tasks.push(todo)
        return this
    }

    getName(){
        return this.name
    }

    getTodoItems(){
        return this.tasks
    }

    getTodoItem(name){
        return this.tasks.find((item) => item.getTitle() === name)
    }

    deleteTodoItem(name){
        this.tasks = this.tasks.filter((item) => item.getTitle() !== name)
    }
    
    updateItem(todo, origin) {
        var record = this.tasks.find((item) => item.getTitle() == origin)

        record.setTitle(todo.getTitle())
    }
}
