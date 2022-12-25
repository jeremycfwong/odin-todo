import { isSameWeek } from "date-fns"
import isSameDay from "date-fns/isSameDay"

export default class Project {
    constructor(name){
        this.name = name
        this.tasks = []
    }

    addItem(todo) {
        if(this.tasks.find((item) => item.getTitle() === todo.getTitle())) return alert('please use a diff task name')
        this.tasks.push(todo)
        return this
    }

    setName(name) {
        this.name = name
    }

    setTasks(tasks){
        this.tasks = tasks
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
        record.setDescription(todo.getDescription())
        if(todo.getRawDate() != ''){
            record.setDueDate(todo.getRawDate())
        }
        
        record.setPriority(todo.getPriority())
    }

    getToday(){
        return this.tasks.filter((item) => isSameDay(item.getRawDate(), new Date()))
    }

    getWeek(){
        return this.tasks.filter((item) => isSameWeek(item.getRawDate(), new Date()))
    }

}
