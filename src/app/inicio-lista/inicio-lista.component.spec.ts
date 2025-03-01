import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioListaComponent } from './inicio-lista.component';

describe('InicioListaComponent', () => {
  let component: InicioListaComponent;
  let fixture: ComponentFixture<InicioListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioListaComponent]
    });
    fixture = TestBed.createComponent(InicioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
