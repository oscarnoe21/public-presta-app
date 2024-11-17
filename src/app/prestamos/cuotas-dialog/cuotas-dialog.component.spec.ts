import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotasDialogComponent } from './cuotas-dialog.component';

describe('CuotasDialogComponent', () => {
  let component: CuotasDialogComponent;
  let fixture: ComponentFixture<CuotasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuotasDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuotasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
