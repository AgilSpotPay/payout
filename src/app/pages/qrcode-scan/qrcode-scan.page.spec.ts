import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrcodeScanPage } from './qrcode-scan.page';

describe('QrcodeScanPage', () => {
  let component: QrcodeScanPage;
  let fixture: ComponentFixture<QrcodeScanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
