import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriverComponent } from './template-driver.component';

describe('TemplateDriverComponent', () => {
  let component: TemplateDriverComponent;
  let fixture: ComponentFixture<TemplateDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
