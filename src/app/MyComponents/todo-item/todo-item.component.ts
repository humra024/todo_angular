import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
 @Input() todo!: Todo;  //! definite assignment assertion operator: Now, the compiler understands that this variable, although not defined at compile time, shall be defined at run-time, and in time, before it is being used.
 @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

 onClick(todo: Todo){
  this.todoDelete.emit(todo);
  console.log("onClick has been triggered in todos-item")
 }
}
