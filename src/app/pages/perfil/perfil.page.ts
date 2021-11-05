import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, } from '@ionic/angular';
import { ServicesPerfilService } from '../../services/services-perfil.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  tituloPerfil:string = "Perfil";
  constructor(private perfilService: ServicesPerfilService, private alertCtrl: AlertController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'email vinculado com sucesso.',
      duration: 3000,
      color: 'danger',
      position: 'bottom'
      //popup rodape
    });
    toast.present();
  }

  ngOnInit() {
  }

}
