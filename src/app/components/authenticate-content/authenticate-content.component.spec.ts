import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticateContentComponent } from './authenticate-content.component';

describe('AuthenticateContentComponent', () => {
  let component: AuthenticateContentComponent;
  let fixture: ComponentFixture<AuthenticateContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticateContentComponent]
    });
    fixture = TestBed.createComponent(AuthenticateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
