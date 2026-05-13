import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TUCCardComponent } from './tuc-card.component';

describe('TUCCardComponent', () => {
  let component: TUCCardComponent;
  let fixture: ComponentFixture<TUCCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TUCCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TUCCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
