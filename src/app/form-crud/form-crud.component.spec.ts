import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCrudComponent } from './form-crud.component';

describe('FormCrudComponent', () => {
  let component: FormCrudComponent;
  let fixture: ComponentFixture<FormCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCrudComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeUndefined();
  });
});
