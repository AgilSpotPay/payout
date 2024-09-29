import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferModalPagePage } from './transfer-modal-page.page';

describe('TransferModalPagePage', () => {
  let component: TransferModalPagePage;
  let fixture: ComponentFixture<TransferModalPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferModalPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
