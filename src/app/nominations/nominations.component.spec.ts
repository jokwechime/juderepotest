import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationsComponent } from './nominations.component';

describe('NominationsComponent', () => {
  let component: NominationsComponent;
  let fixture: ComponentFixture<NominationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
