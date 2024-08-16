import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroZorroComponent } from './cadastro-zorro.component';

describe('CadastroZorroComponent', () => {
  let component: CadastroZorroComponent;
  let fixture: ComponentFixture<CadastroZorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroZorroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroZorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
