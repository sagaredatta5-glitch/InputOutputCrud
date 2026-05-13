import { Component, OnInit } from '@angular/core';
import { Ituc } from '../../models/TUC';
import { snackbarservice } from '../../service/snackbar.service';

@Component({
  selector: 'app-tuc-dashbord',
  templateUrl: './tuc-dashbord.component.html',
  styleUrls: ['./tuc-dashbord.component.scss']
})
export class TUCDashbordComponent implements OnInit {

  editobj!:Ituc

TUCArray:Array<Ituc> =[{
  Name:'Datta Sagare',
  Course:'Angular Development',
  Duration:'9 Months',
  Trainer:'Ravi Sir',
  idnum:'2',
  LinkedinP:'https://media.licdn.com/dms/image/v2/D5603AQGTSLgHEaQopQ/profile-displayphoto-crop_800_800/B56Z3N0_00G0AI-/0/1777274719932?e=1780531200&v=beta&t=OOceNI3LtFZdQG-GBqlJ5W_0KLUthf48cDBeum9p3UQ'
},
{
  Name:'Shivraj Pathade',
  Course:'Software Development',
  Duration:'9 Months',
  Trainer:'Ravi Sir',
  idnum:'3',
  LinkedinP:'https://media.licdn.com/dms/image/v2/D4D35AQG43qhGKWwGRg/profile-framedphoto-shrink_800_800/B4DZ3mx74nHgAk-/0/1777693343554?e=1779256800&v=beta&t=g8HW2o5iC44t7MGcX4_ZMaBjh9Q9de59RLeujURMBMY'
},
{
  Name:'Arjun Chavan',
  Course:'Angular Development',
  Duration:'9 Months',
  Trainer:'Ravi Sir',
  idnum:'4',
  LinkedinP:'https://media.licdn.com/dms/image/v2/D5603AQHxTMtd9WpieQ/profile-displayphoto-crop_800_800/B56Z4IdlNeGsAI-/0/1778258434770?e=1780531200&v=beta&t=M9vHDHcwpdWgnTDkDsJrQgG1BHgEyssZsiAdFp53U7I'
},
{
  Name:'Rohit Yewale',
  Course:'Angular Development',
  Duration:'9 Months',
  Trainer:'Ravi Sir',
  idnum:'6',
  LinkedinP:'https://media.licdn.com/dms/image/v2/D4D03AQGATAwQaWOCnA/profile-displayphoto-crop_800_800/B4DZ0Ew6tmGsAI-/0/1773901430574?e=1780531200&v=beta&t=ASPPl5bjhtY9GJSZh03cxLlWBaRCFKL4zZlA0KlpKz4'
},
]


  constructor(private _snackbar:snackbarservice) { }

  ngOnInit(): void {
  }

  onnewaddmem(mem:Ituc){
    this.TUCArray.push(mem)
    this._snackbar.opensnackbar(`New Member Added Successfully`)
  }

  onremovemember(id:string){
    let getIndex = this.TUCArray.findIndex(t=>(t.idnum===id))
    this.TUCArray.splice(getIndex,1)

  }

  onedit(edit:Ituc){
this.editobj=edit
  }

  onupdate(updated_obj:Ituc){
 let getIndex=this.TUCArray.findIndex(t=>(t.idnum===updated_obj.idnum))
 this.TUCArray[getIndex]=updated_obj
  }
  

}
