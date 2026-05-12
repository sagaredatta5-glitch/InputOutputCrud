import { Component, Input, OnInit } from '@angular/core';
import { Istud } from '../../models/student';
import { MatDialog } from '@angular/material/dialog';
import { snackbarservice } from '../../service/snackbar.service';

@Component({
  selector: 'app-student-dashbord',
  templateUrl: './student-dashbord.component.html',
  styleUrls: ['./student-dashbord.component.scss']
})
export class StudentDashbordComponent implements OnInit {

  editobjstd !:Istud

studentArr:Array<Istud> =[{
  fname:'Datta',
  lname:'sagare',
  email:'dattas5@gmail.com',
  contact:'12123254',
  isactive:true,
  stdId:'12'
},
{
  fname:'omkar',
  lname:'kadam',
  email:'omkar5@gmail.com',
  contact:'64353454',
  isactive:false,
  stdId:'8'
},
{
  fname:'Ajay',
  lname:'deshmukh',
  email:'ajay5@gmail.com',
  contact:'879580968',
  isactive:true,
  stdId:'4'
}
]

  constructor(private _snackbar:snackbarservice) { }

  ngOnInit(): void {
  }

  onaddstud(std:Istud){
    this.studentArr.push(std)
    this._snackbar.opensnackbar(`${std.fname && std.lname} Info Added Successfully`)
  }

  onremove(std:string){
    let getIndex = this.studentArr.findIndex(t=>t.stdId===std)
   let ds= this.studentArr.splice(getIndex,1)
    this._snackbar.opensnackbar(`${ds[0].fname} info removed successfully`)
  }

  onedit(edit:Istud){
  this.editobjstd = edit
  }

  onupdate(updated_obj:Istud){
let getIndex = this.studentArr.findIndex(t=>t.stdId===updated_obj.stdId)
this.studentArr[getIndex]=updated_obj
this._snackbar.opensnackbar(`${updated_obj.fname} Info updated successfully`)
  }
}
