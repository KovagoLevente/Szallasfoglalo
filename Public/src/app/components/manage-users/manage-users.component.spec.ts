import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeUsersComponent } from './manage-users.component';

describe('AgeUsersComponent', () => {
  let component: AgeUsersComponent;
  let fixture: ComponentFixture<AgeUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
