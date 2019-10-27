import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  
  
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    ];
 



  constructor(
    public alertController: AlertController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public NavCtrl: NavController,
  ) {
    this.initializeApp();
  }

  async alerta() {
    const alert = await this.alertController.create({
      header: 'Cuidado!',
      message: '¿Seguro que quieres cancelar y volver? Toda la inspección no guardada se borrará',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
         
          }
        }, {
          text: 'Si, quiero volver',
          
          handler: () => {
            this.NavCtrl.navigateBack('/home')
          }
        }
      ]
    });

    

    await alert.present();
  }

  async alerta2() {
    const alert = await this.alertController.create({
      header: 'Cuidado!',
      message: 'Al salir al menú de ajustes toda la inspección no guardada se borrará',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
         
          }
        }, {
          text: 'Si, quiero volver',
          
          handler: () => {
            this.NavCtrl.navigateBack('/settings')
          }
        }
      ]
    });

    

    await alert.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
