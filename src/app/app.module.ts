import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDashbordComponent } from './shared/component/todo-dashbord/todo-dashbord.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { materialmodule } from './shared/material/material.module';
import { GetconformComponent } from './shared/component/getconform/getconform.component';
import { StudentDashbordComponent } from './shared/component/student-dashbord/student-dashbord.component';
import { StudentFormComponent } from './shared/component/student-form/student-form.component';
import { StudentTableComponent } from './shared/component/student-table/student-table.component';
import { ObserversModule } from "@angular/cdk/observers";
import { CardDashbordComponent } from './shared/component/card-dashbord/card-dashbord.component';
import { CardFormComponent } from './shared/component/card-form/card-form.component';
import { CardListComponent } from './shared/component/card-list/card-list.component';
import { TUCDashbordComponent } from './shared/component/tuc-dashbord/tuc-dashbord.component';
import { TUCCardComponent } from './shared/component/tuc-card/tuc-card.component';
import { TUCFormComponent } from './shared/component/tuc-form/tuc-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashbordComponent,
    TodoFormComponent,
    TodoListComponent,
    GetconformComponent,
    StudentDashbordComponent,
    StudentFormComponent,
    StudentTableComponent,
    CardDashbordComponent,
    CardFormComponent,
    CardListComponent,
    TUCDashbordComponent,
    TUCCardComponent,
    TUCFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materialmodule,
    ObserversModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
