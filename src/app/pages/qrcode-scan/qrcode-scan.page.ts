import { Component, OnInit } from '@angular/core';
import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner';
import { AuthService } from '../../services/auth.service'; // ajuste o caminho conforme necessário
import { NavController } from '@ionic/angular'; // Import NavController

@Component({
  selector: 'app-qrcode-scan',
  templateUrl: './qrcode-scan.page.html',
  styleUrls: ['./qrcode-scan.page.scss'],
})
export class QrcodeScanPage implements OnInit {

  public valor: any = '';

  constructor(private navCtrl: NavController, private authService: AuthService) { } // Injeção de NavController

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

  ngOnInit() {
    this.loadUserWallets();
  }

  // Método para carregar as carteiras do usuário
  private async loadUserWallets() {
    const { email, password } = this.authService.getCredentials();

    // Verifique se as credenciais estão disponíveis
    if (email && password) {
      try {
        const wallets = await this.authService.getWallets(email, password);
        console.log('Carteiras do usuário:', wallets);
        // Aqui você pode fazer algo com as carteiras, como exibi-las na interface
      } catch (error) {
        console.error('Erro ao carregar carteiras:', error);
      }
    } else {
      console.warn('Credenciais não encontradas. O usuário pode não estar logado.');
    }
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