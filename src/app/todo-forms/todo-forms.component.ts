import { Component, OnInit } from '@angular/core';
import {Todo, TodosService} from '../shared/todos.service';

@Component({
  selector: 'app-todo-forms',
  templateUrl: './todo-forms.component.html',
  styleUrls: ['./todo-forms.component.css']
})
export class TodoFormsComponent implements OnInit {

  title: string = ''

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
  }

  addTodo(){
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    }
    this.todosService.addTodo(todo)
    this.title = ''
  }

}
