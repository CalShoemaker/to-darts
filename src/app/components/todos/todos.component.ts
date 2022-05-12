import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public data$:any;
  public newTodo = '';
  
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAll().subscribe( item => {
      this.data$ = item;
    })
  }

  createTodo(){
    let todo:Todo = {
      title: this.newTodo,
      dateTime: new Date()
    }
    this.newTodo = '';
    this.api.addItem(todo);
  }
}
