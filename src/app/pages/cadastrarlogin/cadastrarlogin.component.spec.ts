import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarloginComponent } from './cadastrarlogin.component';

describe('CadastrarloginComponent', () => {
  let component: CadastrarloginComponent;
  let fixture: ComponentFixture<CadastrarloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
