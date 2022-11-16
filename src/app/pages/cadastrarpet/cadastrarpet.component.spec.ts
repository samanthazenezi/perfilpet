import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarpetComponent } from './cadastrarpet.component';

describe('CadastrarpetComponent', () => {
  let component: CadastrarpetComponent;
  let fixture: ComponentFixture<CadastrarpetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarpetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
