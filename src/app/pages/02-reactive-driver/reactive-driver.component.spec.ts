import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDriverComponent } from './reactive-driver.component';

describe('ReactiveDriverComponent', () => {
  let component: ReactiveDriverComponent;
  let fixture: ComponentFixture<ReactiveDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
