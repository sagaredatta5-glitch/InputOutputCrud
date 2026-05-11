import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashbordComponent } from './todo-dashbord.component';

describe('TodoDashbordComponent', () => {
  let component: TodoDashbordComponent;
  let fixture: ComponentFixture<TodoDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
