import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfinishedProjectsComponent } from './unfinished-projects.component';

describe('UnfinishedProjectsComponent', () => {
  let component: UnfinishedProjectsComponent;
  let fixture: ComponentFixture<UnfinishedProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfinishedProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfinishedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
