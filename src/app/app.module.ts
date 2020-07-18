import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CommonMaterialModule } from './common-material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SidebarComponent,
    AddUserDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    AddUserDialogComponent
  ],
  providers: [ 
    DatePipe 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
