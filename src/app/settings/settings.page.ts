import { Component, OnInit } from '@angular/core';
import {AjustesService} from '../ajustes.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  usuario: string;
  empresa: string;

  constructor(private miServicio: AjustesService, public NavCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
this.storage.get('nombre').then( (val) => {
  this.usuario=val;
});
this.storage.get('empresa').then( (val) => {
  this.empresa=val;
});

  }

guardarajustes(){
  
  this.storage.set('nombre', this.usuario);
  this.storage.set('empresa', this.empresa);
  this.miServicio.usuario=this.usuario;
  this.miServicio.empresa=this.empresa;

this.NavCtrl.navigateBack('/home');

}
}
