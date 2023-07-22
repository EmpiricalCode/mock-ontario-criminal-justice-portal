import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenseLawyerComponent } from './defense-lawyer.component';

describe('DefenseLawyerComponent', () => {
  let component: DefenseLawyerComponent;
  let fixture: ComponentFixture<DefenseLawyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefenseLawyerComponent]
    });
    fixture = TestBed.createComponent(DefenseLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
