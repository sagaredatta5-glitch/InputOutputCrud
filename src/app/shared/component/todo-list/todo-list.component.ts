import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../models/todo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconformComponent } from '../getconform/getconform.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() gettodo !:Array<Itodo>

  @Output() eventemiterremove : EventEmitter <string> = new EventEmitter <string>()
  @Output() eventemiteredit : EventEmitter <Itodo> = new EventEmitter <Itodo>()
  constructor(private _matdialog :MatDialog) { }

  ngOnInit(): void {
  }

  onRemove(todo:string){
let config = new MatDialogConfig()
config.width='400 px',
config.disableClose = true,
config.data = 'Are you sure delete todo'
let confignew = this._matdialog.open(GetconformComponent,config)
confignew.afterClosed()
.subscribe(isconform=>{
  if(isconform){
    this.eventemiterremove.emit(todo)
  }
})

  }

  onedit(todo:Itodo){
this.eventemiteredit.emit(todo)
  }

}
