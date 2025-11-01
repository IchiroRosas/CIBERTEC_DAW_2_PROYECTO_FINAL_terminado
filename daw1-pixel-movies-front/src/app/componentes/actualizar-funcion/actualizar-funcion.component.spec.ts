import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarFuncionComponent } from './actualizar-funcion.component';

describe('ActualizarFuncionComponent', () => {
  let component: ActualizarFuncionComponent;
  let fixture: ComponentFixture<ActualizarFuncionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarFuncionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarFuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
