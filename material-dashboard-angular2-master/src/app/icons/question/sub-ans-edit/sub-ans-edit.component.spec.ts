import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAnsEditComponent } from './sub-ans-edit.component';

describe('SubAnsEditComponent', () => {
  let component: SubAnsEditComponent;
  let fixture: ComponentFixture<SubAnsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAnsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAnsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
