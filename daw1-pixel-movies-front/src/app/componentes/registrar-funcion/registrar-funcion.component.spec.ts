import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarFuncionComponent } from './registrar-funcion.component';

describe('RegistrarFuncionComponent', () => {
  let component: RegistrarFuncionComponent;
  let fixture: ComponentFixture<RegistrarFuncionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarFuncionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarFuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
