import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AjustesService } from '../ajustes.service'





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

fase:string;

  constructor(public navCrtl: NavController, private miServicio: AjustesService) {}

  activarservicio(){
   
  }

  fase3(){
  
    this.navCrtl.navigateForward('/selector');
    this.miServicio.marcarfase3();
  }

  fase4() {
    this.navCrtl.navigateForward('/selector');
    this.miServicio.marcarfase4();   
  }

  ajustes() {
    this.navCrtl.navigateForward('/settings');
  }
}
