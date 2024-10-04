import { Component, OnInit } from '@angular/core';
import { IonicModule, AlertController } from  '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [IonicModule],
  styleUrls: ['./home.component.scss'],
})


export class HomeComponent implements OnInit {
  private alertDisplayedKey = 'alertDisplayed';

  alertButtons = [
    {
      text: 'register',
      role: 'register',
      cssClass: 'alert-button-success',
      handler: () => {
        console.log('Registrarse clicked');
        this.router.navigate(['/register']); // Navegar a la página de registro
      }
    },
    {
      text: 'Login',
      role: 'login',
      cssClass: 'alert-button-success',
      handler: () => {
        console.log('Login clicked');
        this.router.navigate(['/login']); // Navegar a la página de login
      }
    }
  ];

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.checkAndShowAlert();
  }

  async checkAndShowAlert() {
    const alertDisplayed = localStorage.getItem(this.alertDisplayedKey);

    if (!alertDisplayed) {
      await this.presentAlert();
      localStorage.setItem(this.alertDisplayedKey, 'true');
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      message: 'Elige una opción',
      buttons: this.alertButtons
    });
  
    await alert.present();
  }
}
