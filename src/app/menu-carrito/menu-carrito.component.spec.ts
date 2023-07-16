import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCarritoComponent } from './menu-carrito.component';

describe('MenuCarritoComponent', () => {
  let component: MenuCarritoComponent;
  let fixture: ComponentFixture<MenuCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCarritoComponent]
    });
    fixture = TestBed.createComponent(MenuCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
