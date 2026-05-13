import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TUCFormComponent } from './tuc-form.component';

describe('TUCFormComponent', () => {
  let component: TUCFormComponent;
  let fixture: ComponentFixture<TUCFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TUCFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TUCFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
