import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule, MaskedTextBoxModule } from '@progress/kendo-angular-inputs';
import { NhComponentLibraryComponent } from './nh-component-library.component';
import { NhPhoneInputComponent } from './nh-phone-input/nh-phone-input.component';
import { NhEmailInputComponent } from './nh-email-input/nh-email-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    MaskedTextBoxModule
  ],
  declarations: [
    NhComponentLibraryComponent,
    NhPhoneInputComponent,
    NhEmailInputComponent
  ],
  exports: [
    NhComponentLibraryComponent,
    NhPhoneInputComponent,
    NhEmailInputComponent
  ]
})
export class NhComponentLibraryModule {}