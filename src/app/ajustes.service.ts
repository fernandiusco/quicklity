import { Injectable } from '@angular/core';
import {formatDate} from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class AjustesService {

  public usuario: any;
  public q: number;
  public empresa: string;
  public fecha= formatDate(new Date(), 'dd/MM/yyyy', 'en');
  public fase: string;
  public msn: string;
  public version: string;
  public vgf: string;
  public zona:string;
  public upperlower:string;

  public tabla: any;


  constructor() { }

  ngOnInit() {
   
    }

marcarfase3(){

  console.log("Acabas de marcar Fase 3");
  this.fase="Fase 3";
}

marcarfase4(){

  console.log("Acabas de marcar Fase 4");
  this.fase="Fase 4";
}



}
