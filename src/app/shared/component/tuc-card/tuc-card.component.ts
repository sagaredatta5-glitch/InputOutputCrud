import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ituc } from '../../models/TUC';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconformComponent } from '../getconform/getconform.component';

@Component({
  selector: 'app-tuc-card',
  templateUrl: './tuc-card.component.html',
  styleUrls: ['./tuc-card.component.scss']
})
export class TUCCardComponent implements OnInit {

  @Input() getTUCarr!:Array<Ituc>

  @Output() removemember : EventEmitter<string> = new EventEmitter<string>()

  @Output() editmember : EventEmitter<Ituc> = new EventEmitter<Ituc>()

 


  constructor(private _matdialog:MatDialog) { }

  ngOnInit(): void {
  }

  onremove(stdid:string){
    // this.editmember.emit(id)
    let config = new MatDialogConfig()
    config.width='400 px',
    config.disableClose = true,
    config.data = 'Are You Sure Remove This Member'
    let confignew = this._matdialog.open(GetconformComponent,config)
    confignew.afterClosed()
    .subscribe(id=>{
      if(id){
        this.removemember.emit(stdid)
      }
    })

  }

  onedit(tuc:Ituc){
this.editmember.emit(tuc)
  }
  

}
