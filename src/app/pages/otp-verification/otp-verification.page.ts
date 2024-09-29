import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Import NavController

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
})
export class OtpVerificationPage {
  otpDigits: string[] = ['', '', '', '']; // Array para armazenar os dígitos do OTP

  constructor(private navCtrl: NavController) { } // Injeção de NavController

  handleInput(event: any, index: number) {
    const input = event.target.value;

    if (input && !isNaN(input) && input.length === 1) {
      this.otpDigits[index] = input;

      if (index < this.otpDigits.length - 1) {
        (document.getElementsByTagName('ion-input')[index + 1] as any).setFocus();
      }
    } else if (input === '') {
      if (index > 0) {
        (document.getElementsByTagName('ion-input')[index - 1] as any).setFocus();
      }
    } else {
      event.target.value = '';
    }
  }

  handleFocus(index: number) {
    this.otpDigits[index] = '';
  }

  verifyOtp() {
    const otp = this.otpDigits.join('');
    if (otp.length === this.otpDigits.length && otp.match(/^\d+$/)) {
      console.log('OTP Verificado:', otp);
      // Adicione a lógica para verificar o OTP com o seu backend
    } else {
      console.error('OTP inválido. Certifique-se de que todos os campos estão preenchidos.');
    }
  }

  resendOtp() {
    console.log('Reenviando OTP...');
    // Adicione a lógica para reenviar o OTP
  }

  goHome() {
    this.navCtrl.navigateBack('/home'); // Navega de volta à página inicial
  }
}