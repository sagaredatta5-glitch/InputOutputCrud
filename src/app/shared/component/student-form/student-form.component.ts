import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Istud } from '../../models/student';
import { uuidservice } from '../../service/uuid.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit,OnChanges {
isinEdit:boolean = false

@ViewChild('fname') fname! :ElementRef
@ViewChild('lname') lname! :ElementRef
@ViewChild('email') email! :ElementRef
@ViewChild('contact') contact! :ElementRef
@ViewChild('isactive') isactive! :ElementRef

@Output() eventnewstud : EventEmitter<Istud> = new  EventEmitter<Istud>()
@Output() eventupdatestud : EventEmitter<Istud> = new  EventEmitter<Istud>()
  @Input() getstdobj!:Istud


  constructor(private _uuid :uuidservice) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['getstdobj'].currentValue){
      this.isinEdit = true
      this.fname.nativeElement.value=this.getstdobj.fname,
      this.lname.nativeElement.value=this.getstdobj.lname,
      this.email.nativeElement.value=this.getstdobj.email,
      this.contact.nativeElement.value=this.getstdobj.contact
    }
  }

  ngOnInit(): void {
  }

  onaddstd(){
if(this.fname.nativeElement.value.length > 0){
      let studentObj:Istud={
      fname:this.fname.nativeElement.value,
      lname:this.lname.nativeElement.value,
      email:this.email.nativeElement.value,
      contact:this.contact.nativeElement.value,
      isactive:this.isactive.nativeElement.value==='true' ? true : false,
      stdId:this._uuid.uuidfun()
    }
  this.eventnewstud.emit(studentObj)
      this.fname.nativeElement.value=''
      this.lname.nativeElement.value=''
      this.email.nativeElement.value=''
      this.contact.nativeElement.value=''
      this.isactive.nativeElement.value=true
}

  }

  onupdatestd(){
    let updated_obj:Istud={
      fname:this.fname.nativeElement.value,
      lname:this.lname.nativeElement.value,
      email:this.email.nativeElement.value,
      contact:this.contact.nativeElement.value,
      stdId:this.getstdobj.stdId,
      isactive:this.isactive.nativeElement.value==='true'
      

    }
    this.eventupdatestud.emit(updated_obj)
    this.fname.nativeElement.value=''
      this.lname.nativeElement.value=''
      this.email.nativeElement.value=''
      this.contact.nativeElement.value=''
      this.isactive.nativeElement.value=true
      this.isinEdit=false
  }

}
