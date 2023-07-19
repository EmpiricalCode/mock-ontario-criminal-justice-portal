import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerloggedIn$Component } from './officer-logged-in.component';

describe('OfficerloggedIn$Component', () => {
  let component: OfficerloggedIn$Component;
  let fixture: ComponentFixture<OfficerloggedIn$Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficerloggedIn$Component]
    });
    fixture = TestBed.createComponent(OfficerloggedIn$Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
