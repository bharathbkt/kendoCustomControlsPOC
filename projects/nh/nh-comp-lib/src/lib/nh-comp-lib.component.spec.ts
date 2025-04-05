import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhCompLibComponent } from './nh-comp-lib.component';

describe('NhCompLibComponent', () => {
  let component: NhCompLibComponent;
  let fixture: ComponentFixture<NhCompLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NhCompLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NhCompLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
