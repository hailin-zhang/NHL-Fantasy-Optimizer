import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionTeamsComponent } from './division-teams.component';

describe('DivisionTeamsComponent', () => {
  let component: DivisionTeamsComponent;
  let fixture: ComponentFixture<DivisionTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
