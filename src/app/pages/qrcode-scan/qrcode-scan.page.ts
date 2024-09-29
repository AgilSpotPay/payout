import { Component } from '@angular/core';
import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner';
import { NavController } from '@ionic/angular'; // Import NavController

@Component({
  selector: 'app-qrcode-scan',
  templateUrl: './qrcode-scan.page.html',
  styleUrls: ['./qrcode-scan.page.scss'],
})
export class QrcodeScanPage {

  public valor: any = '';

  constructor(private navCtrl: NavController) { } // Injeção de NavController

  async startScan(val?: number) {
    try {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: val || 17,
        cameraDirection: 1,
      });
      console.log(result);
      this.valor = result.ScanResult;
      return result.ScanResult;

    } catch (e) {
      throw (e);
    }
  }

  goHome() {
    this.navCtrl.navigateBack('/home'); // Navega de volta à página inicial
  }

  // async startScan(val?: number) {
  //   try {
  //     const result = CapacitorBarcodeScanner.scanBarcode({
  //       hint: val || 17,
  //       cameraDirection: 1,
  //     });
  //     console.log(result);
  //     return (await result).ScanResult;
  //   } catch(e) {
  //     throw(e);
  //   }
  // }

}