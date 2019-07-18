import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlotComponent } from './new-plot.component';

describe('NewPlotComponent', () => {
  let component: NewPlotComponent;
  let fixture: ComponentFixture<NewPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
