import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAppComponent } from './single-app.component';

describe('SingleAppComponent', () => {
  let component: SingleAppComponent;
  let fixture: ComponentFixture<SingleAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
