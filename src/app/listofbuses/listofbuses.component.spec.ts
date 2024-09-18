import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofbusesComponent } from './listofbuses.component';

describe('ListofbusesComponent', () => {
  let component: ListofbusesComponent;
  let fixture: ComponentFixture<ListofbusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListofbusesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofbusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
