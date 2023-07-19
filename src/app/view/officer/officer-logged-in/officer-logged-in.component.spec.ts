import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerLoggedInComponent } from './officer-logged-in.component';

describe('OfficerLoggedInComponent', () => {
  let component: OfficerLoggedInComponent;
  let fixture: ComponentFixture<OfficerLoggedInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficerLoggedInComponent]
    });
    fixture = TestBed.createComponent(OfficerLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
