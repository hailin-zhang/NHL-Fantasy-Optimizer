import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPlayers.ComponentComponent } from './team-players.component';

describe('TeamPlayers.ComponentComponent', () => {
  let component: TeamPlayers.ComponentComponent;
  let fixture: ComponentFixture<TeamPlayers.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPlayers.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPlayers.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
