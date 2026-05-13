import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Ituc } from '../../models/TUC';
import { uuidservice } from '../../service/uuid.service';
import { snackbarservice } from '../../service/snackbar.service';

@Component({
  selector: 'app-tuc-form',
  templateUrl: './tuc-form.component.html',
  styleUrls: ['./tuc-form.component.scss']
})
export class TUCFormComponent implements OnInit,OnChanges {
isinEditmode:boolean=false

@ViewChild('Name') Name! : ElementRef
@ViewChild('Course') Course! : ElementRef
@ViewChild('Duration') Duration! : ElementRef
@ViewChild('Trainer') Trainer! : ElementRef
@ViewChild('LinkedinP') LinkedinP! : ElementRef

@Output() newmemberadd : EventEmitter<Ituc> = new  EventEmitter<Ituc>() 

@Output() updatemember : EventEmitter<Ituc> = new  EventEmitter<Ituc>() 

@Input() geteditobj!:Ituc
  constructor(private _uuid:uuidservice, private _snackbar:snackbarservice) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['geteditobj'].currentValue){
      this.Name.nativeElement.value=this.geteditobj.Name,
      this.Course.nativeElement.value=this.geteditobj.Course,
      this.Duration.nativeElement.value=this.geteditobj.Duration,
      this.Trainer.nativeElement.value=this.geteditobj.Trainer,
      this.LinkedinP.nativeElement.value=this.geteditobj.LinkedinP,
      this.isinEditmode=true
    }
  }

  ngOnInit(): void {
  }

  onAddMember(){
    if(this.Name.nativeElement.value.length >0){
      let newmember:Ituc={
      Name:this.Name.nativeElement.value,
      Course:this.Course.nativeElement.value,
      Duration:this.Duration.nativeElement.value,
      Trainer:this.Trainer.nativeElement.value,
      LinkedinP:this.LinkedinP.nativeElement.value,
      idnum:this._uuid.uuidfun()
    }
this.newmemberadd.emit(newmember)
      this.Name.nativeElement.value=''
      this.Course.nativeElement.value=''
      this.Duration.nativeElement.value=''
      this.Trainer.nativeElement.value=''
      this.LinkedinP.nativeElement.value=''
      this._snackbar.opensnackbar(`Member Added Successfully`)
    }

  }
  onupdatemember(){
    let updated_obj:Ituc={
      Name:this.Name.nativeElement.value,
      Course:this.Course.nativeElement.value,
      Duration:this.Duration.nativeElement.value,
      Trainer:this.Trainer.nativeElement.value,
      LinkedinP:this.LinkedinP.nativeElement.value,
      idnum:this.geteditobj.idnum
    }
    this.updatemember.emit(updated_obj)
    this.isinEditmode=false
      this.Name.nativeElement.value=''
      this.Course.nativeElement.value=''
      this.Duration.nativeElement.value=''
      this.Trainer.nativeElement.value=''
      this.LinkedinP.nativeElement.value=''
      this._snackbar.opensnackbar('Member Update Successfully ')
  }
}
