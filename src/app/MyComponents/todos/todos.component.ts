import { Component } from '@angular/core';   //OnInit
import {CommonModule} from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
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
  
}


