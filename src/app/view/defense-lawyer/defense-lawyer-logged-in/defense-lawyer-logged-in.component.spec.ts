import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenseLawyerLoggedInComponent } from './defense-lawyer-logged-in.component';

describe('DefenseLawyerLoggedInComponent', () => {
  let component: DefenseLawyerLoggedInComponent;
  let fixture: ComponentFixture<DefenseLawyerLoggedInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefenseLawyerLoggedInComponent]
    });
    fixture = TestBed.createComponent(DefenseLawyerLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
