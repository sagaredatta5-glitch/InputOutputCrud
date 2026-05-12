import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istud } from '../../models/student';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconformComponent } from '../getconform/getconform.component';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  @Input() getstudent! : Array<Istud>

  @Output() eventremoveemit : EventEmitter<string> = new EventEmitter<string>()
  @Output() eventeditemit : EventEmitter<Istud> = new EventEmitter<Istud>()
  constructor(private _matdilog :MatDialog) { }

  ngOnInit(): void {
  }

  onRemove(std:string){

let config = new MatDialogConfig()
config.width='400px',
config.disableClose=true,
config.data =`Are you sure delet student info`

let newconfig = this._matdilog.open(GetconformComponent,config)
newconfig.afterClosed()
.subscribe((isconfoem)=>{
  if(isconfoem){
    this.eventremoveemit.emit(std)
  }
})

  }

  onedit(std:Istud){
this.eventeditemit.emit(std)
  }

}
