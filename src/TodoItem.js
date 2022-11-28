export default class TodoItem {
    constructor(title, description, dueDate, priority, completed) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate
        this.priority = priority
        this.completed = completed;
    }

    getTitle(){
        return this.title;
    }

    setTitle(title){
        this.title = title
    }

    getDescription(){
        return this.description;
    }

    setDescription(description){
        this.description = description;
    }

    getDueDate(){
        return this.dueDate;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate;
    }

    getPriority(){
        return this.priority;
    }

    setPriority(priority){
        this.priority = priority;
    }

    getCompleted(){
        return this.completed;
    }

    setCompleted(completed){
        this.completed = completed;
    }
}
