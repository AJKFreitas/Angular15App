import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandAloneBootComponent } from './stand-alone-boot.component';

describe('StandAloneBootComponent', () => {
  let component: StandAloneBootComponent;
  let fixture: ComponentFixture<StandAloneBootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StandAloneBootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandAloneBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
