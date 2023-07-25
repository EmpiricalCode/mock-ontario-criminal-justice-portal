import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenseLawyerLoggedOutComponent } from './defense-lawyer-logged-out.component';

describe('DefenseLawyerLoggedOutComponent', () => {
  let component: DefenseLawyerLoggedOutComponent;
  let fixture: ComponentFixture<DefenseLawyerLoggedOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefenseLawyerLoggedOutComponent]
    });
    fixture = TestBed.createComponent(DefenseLawyerLoggedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
