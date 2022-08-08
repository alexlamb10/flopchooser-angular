import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieChoiceComponent } from './movie-choice.component';

describe('MovieChoiceComponent', () => {
  let component: MovieChoiceComponent;
  let fixture: ComponentFixture<MovieChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
