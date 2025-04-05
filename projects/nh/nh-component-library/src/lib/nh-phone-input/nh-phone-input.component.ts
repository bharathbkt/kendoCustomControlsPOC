import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaskedTextBoxModule } from '@progress/kendo-angular-inputs';

@Component({
  selector: 'lib-nh-phone-input',
  standalone: true,
  imports: [MaskedTextBoxModule],
  templateUrl: './nh-phone-input.component.html',
  styleUrl: './nh-phone-input.component.css'
})
export class NhPhoneInputComponent {
  @Input() phoneNumber: string = '';
  @Output() phoneNumberChange = new EventEmitter<string>();

  onValueChange(value: string) {
    this.phoneNumber = value;
    this.phoneNumberChange.emit(value);
  }
}
