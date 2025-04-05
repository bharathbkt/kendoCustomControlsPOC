import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NhEmailInputComponent, NhPhoneInputComponent } from '@nh/nh-component-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NhEmailInputComponent, NhPhoneInputComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kendoCustomControlsPOC';
  myPhoneNumber = '';
  myEmail: string = '';

  // New FormGroup for reactive forms
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form group with the email control
    this.formGroup = this.fb.group({
      email: [this.myEmail] // Initialize with myEmail
    });
  }
}
