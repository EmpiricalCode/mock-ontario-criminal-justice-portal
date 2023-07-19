import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerLoggedOutComponent } from './officer-logged-out.component';

describe('OfficerLoggedOutComponent', () => {
  let component: OfficerLoggedOutComponent;
  let fixture: ComponentFixture<OfficerLoggedOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficerLoggedOutComponent]
    });
    fixture = TestBed.createComponent(OfficerLoggedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
