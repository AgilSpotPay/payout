import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransferModalPage } from '../transfer-modal/transfer-modal.page';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  swiperModules = [IonicSlides];
  constructor(private modalController: ModalController) { }

  async openTransferModal() {
    const modal = await this.modalController.create({
      component: TransferModalPage,
      cssClass: 'half-height-modal' // Classe CSS personalizada para controlar o tamanho
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
