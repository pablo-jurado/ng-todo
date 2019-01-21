export default class Todo {

    description: string;
    isDone: boolean;
    edit: boolean;
    
    constructor(description: string) {
        this.description = description;
        this.isDone = false;
        this.edit = false;
    }
  }