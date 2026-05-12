import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Imovie } from '../../models/movie';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconformComponent } from '../getconform/getconform.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

@Output() eventremovemovie : EventEmitter<string> = new EventEmitter<string>()

@Output() eventeditmovie : EventEmitter<Imovie> = new EventEmitter<Imovie>()

  @Input() getmovie!:Array<Imovie>
  constructor( private _matdialog:MatDialog) { }

  ngOnInit(): void {
  }

  onRemove(mid:string){
  // this.eventremovemovie.emit(mid)
  let config = new MatDialogConfig()
  config.width='400 px',
  config.disableClose = true,
  config.data = 'Are you sure for Delet Movie'
  let confignew = this._matdialog.open(GetconformComponent,config)
  confignew.afterClosed()
  .subscribe(isconform=>{
    if(isconform){
      this.eventremovemovie.emit(mid)
    }
  })
  
  }

  onedit(movi:Imovie){
this.eventeditmovie.emit(movi)
  }

}
