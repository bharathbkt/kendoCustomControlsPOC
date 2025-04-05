import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NhPhoneInputComponent } from '@nh/nh-component-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NhPhoneInputComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kendoCustomControlsPOC';
  myPhoneNumber = '';
}
