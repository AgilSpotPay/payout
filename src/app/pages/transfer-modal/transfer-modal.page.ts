import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular'; // Import NavController

@Component({
  selector: 'app-transfer-modal',
  templateUrl: './transfer-modal.page.html',
  styleUrls: ['./transfer-modal.page.scss'],
})
export class TransferModalPage implements OnInit {

  public valor: any = '';
  public pix_key: any = '';
  public key_type: any = '';

  constructor(private modalController: ModalController, private navCtrl: NavController) { }

  closeModal() {
    this.modalController.dismiss();
  }

  // Alteração para passar o formulário no parâmetro e usar a validação angular
  submitForm(form: any) {
    if (form.valid) {
      console.log('Formulário enviado com o valor:', this.valor, ' para chave pix: ', this.pix_key, ' Tipo de chave: ', this.key_type);
      this.goOTP();
      this.closeModal();
    } else {
      console.log('Formulário inválido.');
    }
  }

  formatToBRL(event: any) {
    let value = event.target.value;

    // Remove qualquer caractere que não seja número ou ponto
    event.target.value = value.replace(/[^0-9.,]/g, '');

    // Remove qualquer caractere que não seja número ou ponto
    value = value.replace(/[^\d]/g, '');

    // Adiciona as casas decimais
    if (value.length > 2) {
      value = (parseFloat(value) / 100).toFixed(2);
    } else {
      value = (parseFloat(value) / 100).toFixed(2);
    }

    // Formata no estilo BRL
    this.valor = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(parseFloat(value));
  }

  goOTP() {
    this.navCtrl.navigateBack('/otp-verification'); // Navega de volta à página inicial
  }

  ngOnInit() {
  }

}
