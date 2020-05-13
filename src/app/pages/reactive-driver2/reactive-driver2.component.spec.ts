import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDriver2Component } from './reactive-driver2.component';

describe('ReactiveDriver2Component', () => {
  let component: ReactiveDriver2Component;
  let fixture: ComponentFixture<ReactiveDriver2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveDriver2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDriver2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
