import { NgModule } from "@angular/core";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


let snackbar =[
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
    
]

@NgModule({
    imports:[...snackbar],
    exports:[...snackbar]

})

export class materialmodule{

}