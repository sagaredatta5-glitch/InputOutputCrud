import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TUCDashbordComponent } from './tuc-dashbord.component';

describe('TUCDashbordComponent', () => {
  let component: TUCDashbordComponent;
  let fixture: ComponentFixture<TUCDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TUCDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TUCDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
