import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { KENDO_TEXTBOX } from '@progress/kendo-angular-inputs';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'lib-nh-email-input',
  standalone: true,
  imports: [KENDO_TEXTBOX, ReactiveFormsModule, CommonModule], // Add CommonModule here
  templateUrl: './nh-email-input.component.html',
  styleUrls: ['./nh-email-input.component.css']
})
export class NhEmailInputComponent {
  @Input() formGroup!: FormGroup; // Receive the parent form group
  @Input() controlName: string = 'email'; // Name of the form control within the form group
  @Input() label: string = 'Email';
  @Input() required: boolean = false;

  emailControl!: FormControl;

  ngOnInit() {
    this.emailControl = new FormControl('', {
      nonNullable: true,
      validators: this.required ? [Validators.required, Validators.email] : [Validators.email],
    });

    // Add the control to the parent form group if it exists
    if (this.formGroup) {
      this.formGroup.addControl(this.controlName, this.emailControl);
    }
  }
}
