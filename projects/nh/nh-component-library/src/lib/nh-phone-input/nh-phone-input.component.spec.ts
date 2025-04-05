import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhPhoneInputComponent } from './nh-phone-input.component';

describe('NhPhoneInputComponent', () => {
  let component: NhPhoneInputComponent;
  let fixture: ComponentFixture<NhPhoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NhPhoneInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NhPhoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
