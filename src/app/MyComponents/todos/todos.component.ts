import { Component } from '@angular/core';   //OnInit
import {CommonModule} from '@angular/common';
import { Todo } from '../../Todo';
import {TodoItemComponent} from '../todo-item/todo-item.component'

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent{  //implements OnInit

  todos: Todo[]=[{
    sno: 1,
    title: 'This is Title 1',
    desc: 'description1',
    active: true
  },
  {
    sno: 2,
    title: 'This is Title 2',
    desc: 'description1',
    active: true
  },
  {
    sno: 3,
    title: 'This is Title 3',
    desc: 'description1',
    active: true
  }];
  // ngOnInit(): void {
      
  // }
  
  deleteTodo(todo:Todo){
    console.log(todo)
    const index=this.todos.indexOf(todo)
    this.todos.splice(index,1)
  }
}


