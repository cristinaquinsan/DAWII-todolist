import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTodoComponent } from './see-todo.component';

describe('SeeTodoComponent', () => {
  let component: SeeTodoComponent;
  let fixture: ComponentFixture<SeeTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
