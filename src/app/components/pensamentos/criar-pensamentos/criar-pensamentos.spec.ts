import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPensamentos } from './criar-pensamentos';

describe('CriarPensamentos', () => {
  let component: CriarPensamentos;
  let fixture: ComponentFixture<CriarPensamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriarPensamentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPensamentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
