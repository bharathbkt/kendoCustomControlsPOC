import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NhComponentLibraryComponent } from './nh-component-library.component';
import { NhPhoneInputComponent } from './nh-phone-input/nh-phone-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NhPhoneInputComponent,
    NhComponentLibraryComponent
  ],
  exports: [
    NhComponentLibraryComponent,
    NhPhoneInputComponent
  ]
})
export class NhComponentLibraryModule {}