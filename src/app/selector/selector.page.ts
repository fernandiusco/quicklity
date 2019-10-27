import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AjustesService} from '../ajustes.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-selector',
  templateUrl: './selector.page.html',
  styleUrls: ['./selector.page.scss'],
})
export class SelectorPage implements OnInit {

  fase:string;
  msn: string;
  version:string;
  vgf:string;
  zona:string;
  upperlower:string;
  foto:string;


  constructor(public navCrtl: NavController, private miServicio: AjustesService, public toastController: ToastController, private storage: Storage) {this.foto="/assets/S19.PNG" }

  ngOnInit() {
  
  this.fase=this.miServicio.fase
  console.log(this.fase)
  }
comenzarinspeccion(){

  if (this.msn==undefined || this.version==undefined || this.vgf==undefined || this.upperlower==undefined ){
  this.aviso()
  }
  else{
    this.navCrtl.navigateForward('/marcador');
  }
 
}
almacenaravion(){
this.miServicio.msn=this.msn;
this.miServicio.version=this.version;
this.miServicio.vgf=this.vgf;
this.miServicio.upperlower=this.upperlower;


console.log(this.miServicio.msn);
console.log(this.miServicio.version);
console.log(this.miServicio.vgf);
console.log(this.miServicio.upperlower);
console.log(this.miServicio.usuario);
console.log(this.miServicio.fecha);

}

cambiodefoto(){
  if(this.upperlower=="UPPER"){
    this.foto="/assets/S19upper.png"
  }
  else{
    this.foto="/assets/S19lower.png"
  }
}

async aviso() {
  const toast = await this.toastController.create({
    position: 'top',
    color: 'danger',
    message: ' Completa Todos Los Campos Para Continuar!',
    duration: 1500,
    
  });
  toast.present();
}

}
