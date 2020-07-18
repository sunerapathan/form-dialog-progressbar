import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatDialogModule } from '@angular/material/dialog';

import {
  MatSidenavModule,
  MatProgressBarModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatRadioModule,
  MatSelectModule,
  MatDatepickerModule, 
  MatNativeDateModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  exports: [
    FlexLayoutModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatPaginatorModule
  ],

  declarations: []
})
export class CommonMaterialModule { }
