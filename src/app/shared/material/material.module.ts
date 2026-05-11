import { NgModule } from "@angular/core";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


let snackbar =[
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule
]

@NgModule({
    imports:[...snackbar],
    exports:[...snackbar]

})

export class materialmodule{

}