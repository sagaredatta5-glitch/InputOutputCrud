import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Itodo } from '../../models/todo';
import { uuidservice } from '../../service/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit,OnChanges {
isinEditmode : boolean=false

@ViewChild('TodoItem') TodoItem !: ElementRef
@ViewChild('iscomplet') iscomplet !: ElementRef

@Output() emitnewtodo :EventEmitter <Itodo> = new EventEmitter<Itodo>()

@Output() emitnewtodoupdate :EventEmitter <Itodo> = new EventEmitter<Itodo>()


@Input() gettodo !: Itodo
  constructor(private _uuid : uuidservice) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['gettodo'].currentValue){
      this.isinEditmode = true
      this.TodoItem.nativeElement.value = this.gettodo.tdodItem,
      this.iscomplet.nativeElement.value = this.gettodo.iscomplate
    }
  }

  ngOnInit(): void {

  }

  onaddtodo(){
    if(this.TodoItem.nativeElement.value.length > 0){
      let newtodo:Itodo={
         tdodItem: this.TodoItem.nativeElement.value,
         iscomplate:this.iscomplet.nativeElement.value ==='true' ? true : false,
         todoId: this._uuid.uuidfun()
    }
    this.emitnewtodo.emit(newtodo)
     this.TodoItem.nativeElement.value=''
    this.iscomplet.nativeElement.value = true
  }
    }

onupdate(){
  let updated_todo:Itodo = {
    tdodItem : this.TodoItem.nativeElement.value,
    todoId:this.gettodo.todoId,
    iscomplate: this.iscomplet.nativeElement.value
  }
  this.emitnewtodoupdate.emit(updated_todo)
  this.TodoItem.nativeElement.value='',
  this.iscomplet.nativeElement.value=true
  this.isinEditmode=false
}

}
