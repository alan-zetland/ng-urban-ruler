import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseValueUnitsComponent } from './choose-value-units.component';

describe('ChooseValueUnitsComponent', () => {
  let component: ChooseValueUnitsComponent;
  let fixture: ComponentFixture<ChooseValueUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseValueUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseValueUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
