import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhEmailInputComponent } from './nh-email-input.component';

describe('NhEmailInputComponent', () => {
  let component: NhEmailInputComponent;
  let fixture: ComponentFixture<NhEmailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NhEmailInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NhEmailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
