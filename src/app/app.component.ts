import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "todo-app";
  todoArray = [];

  addTodo(value) {
    if (!!value) {
      this.todoArray.push(value);
    } else {
      alert("Field required");
    }
  }

  deleteTodo(todo) {
    for (let i = 0; i < this.todoArray.length; i++) {
      if (this.todoArray[i] === todo) {
        this.todoArray.splice(i, 1);
      }
    }
  }
}
