import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo';
import { snackbarservice } from '../../service/snackbar.service';

@Component({
  selector: 'app-todo-dashbord',
  templateUrl: './todo-dashbord.component.html',
  styleUrls: ['./todo-dashbord.component.scss']
})
export class TodoDashbordComponent implements OnInit {
edittodo ! :Itodo

todoArr: Array<Itodo> =[
  {
    tdodItem: 'Javascript',
    todoId:'7',
    iscomplate: true,
  },
  {
    tdodItem: 'TypescriptS',
    todoId:'3',
    iscomplate: false,
  },
  {
    tdodItem: 'Node',
    todoId:'8',
    iscomplate: true,
  }
]

  constructor(private _snackbar :snackbarservice) { }

  ngOnInit(): void {
  }

  onaddtodo(todo:Itodo){
   this.todoArr.push(todo)
   this._snackbar.opensnackbar(`Todo is Added Successfully ${todo.tdodItem}`)
  }

  onRemove(todo:string){
    let getIndex = this.todoArr.findIndex(t=>t.todoId===todo)
    let newtodo = this.todoArr.splice(getIndex,1)
    this._snackbar.opensnackbar(`Todo is Remove Successfully ${newtodo[0].tdodItem}`)
  }

  onedit(edit:Itodo){
this.edittodo = edit
  }

  onupdate(updatetodo:Itodo){
    let getIndex = this.todoArr.findIndex(t=>t.todoId===updatetodo.todoId)
    this.todoArr[getIndex]=updatetodo
    
  }
  

}
