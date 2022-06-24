class ToDoList{
    toDos = JSON.parse(localStorage.getItem('todos')) || [];

    constructor(toDos){
        this.toDos = toDos;
    }
    
    addToDo(todoText) {
        const todo = {
          id: Math.floor(Math.random() * 9999),
          title: todoText,
          date : new Date().toLocaleString(),
          isDone : false
        }

        this.toDos.push(todo)
        localStorage.setItem('todo', JSON.stringify(this.toDos));
      }

    searchToDo(todoText){
      this.toDos = this.toDos.filter(function (toDo)
      {
          return toDo.title === todoText;
      });
      return this.toDos
    }
    
    completedTasks(){
      this.toDos = this.toDos.filter(function (toDo)
      {
          return toDo.isDone === true;
      });
      return this.toDos
      }

    updateToDoList(){
      this.toDos = JSON.parse(localStorage.getItem('todo'));
    }

    clearAll(){
      this.toDos = [];
      localStorage.setItem("todo", JSON.stringify(this.toDos));
    }
}
