import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferModalPage } from './transfer-modal.page';

describe('TransferModalPage', () => {
  let component: TransferModalPage;
  let fixture: ComponentFixture<TransferModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
