import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getconform',
  templateUrl: './getconform.component.html',
  styleUrls: ['./getconform.component.scss']
})
export class GetconformComponent implements OnInit {
getmsg ! :string
  constructor(private _matdialogref : MatDialogRef<GetconformComponent>,
    @Inject(MAT_DIALOG_DATA) msg :string
  ) {
this.getmsg = msg

   }

  ngOnInit(): void {
  }

  onclick(flag:boolean){
    this._matdialogref.close(flag)
  }

}
