import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { TodosComponent } from './MyComponents/todos/todos.component.ts';
import {TodosComponent} from './MyComponents/todos/todos.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';
  // constructor(){
  //   setTimeout(()=>{
  //     this.title="Changed Title";
  //   },2000);
  // }
}
