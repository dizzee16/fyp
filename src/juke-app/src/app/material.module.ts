import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatListModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatListModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  CommonModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  imports: modules,
  exports: modules
})

export class MaterialModule { }
