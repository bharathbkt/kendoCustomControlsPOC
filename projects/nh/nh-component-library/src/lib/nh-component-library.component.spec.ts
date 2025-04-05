import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhComponentLibraryComponent } from './nh-component-library.component';

describe('NhComponentLibraryComponent', () => {
  let component: NhComponentLibraryComponent;
  let fixture: ComponentFixture<NhComponentLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NhComponentLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NhComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
