import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //apiURL = "";
  mockData = [{ title:"test", dateTime: new Date() },{ title:"test2", dateTime: new Date()} ]
  constructor() { }

  getAll():Observable<object>{
    return new Observable(item =>{
      setTimeout(()=>{
        item.next(this.mockData);
      }, 2000)
    })
  }

  addItem(item:Todo){
    return this.mockData.push(item);
  }
}
