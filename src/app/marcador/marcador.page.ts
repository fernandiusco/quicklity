import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AjustesService } from '../ajustes.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

//COMPONENTES DE ESCRITURA
import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.page.html',
  styleUrls: ['./marcador.page.scss'],
})
export class MarcadorPage implements OnInit {

up: boolean;
lo: boolean;
omegastras: boolean;

usuario:string;
comentario: string;
intpiel:string; 
nudo:string; 
lineas:number;
fr1:string;
fr2:string;
str1:string;
str2:string;
q:number;
p:number;
lado:string;
marcado:any;

//VARIABLES DE ESCRITURA EN TABLA
i:number;
j:number;
csvData: any[]=[];
headerRow:any []=[];
//VARIABLES DE ESCRITURA EN TABLA

RHcolor:string;
LHcolor:string;
Nudocolor:string="medium"
interiorcolor:string="tertiary"
pielcolor:string="tertiary"
omegacolor:string="primary"
framecolor:string="primary"


  constructor(public navCrtl: NavController, private miServicio: AjustesService, public toastController: ToastController,public alertController: AlertController, private http:HttpClient, private papa: Papa,private storage: Storage,) { 
    this.loadCSV();
  }



ngOnInit() {
    if (this.lineas==undefined) {
    this.lineas=0;
    }

    if (this.miServicio.upperlower=='UPPER') {
      this.up=true;
      this.lo=false;
      this.omegastras=true;
      console.log("Te muestro UPPER");
      }
      else{
        this.up=false;
        this.lo=true;
        this.omegastras=true;
        console.log("Te muestro LOWER");
      }

      this.storage.get('nombre').then( (val) => {
        this.usuario=val});

        this.intpiel="";
        this.nudo="";
        this.fr1="";
        this.fr2="";
        this.str1="";
        this.str2="";
        this.lado="";
        

    }

// Escribir en modelo tabla CSV -----------------------------------

    private loadCSV(){
      this.http.get('./assets/modelo.csv', {
        responseType: 'text'
      }).subscribe(
        data=> this.extractData(data),
        err => console.log('error: ',err),
      )
    }

    extractData(res) {
      let csvData= res || '';
    
      this.papa.parse(csvData,{
    
        complete: parsedData=>{
         this.headerRow=parsedData.data.splice(1,0)[0];
          this.csvData=parsedData.data;
        }
      })
      }

      nuevalinea(){

        this.i=this.lineas+1;
        //Cargar Persona
        this.j=0;
        this.csvData[this.i][this.j]=this.usuario;
        //Cargar Fecha
        this.j=1;
        this.csvData[this.i][this.j]=this.miServicio.fecha;
        //Cargar VGF
        this.j=2;
        this.csvData[this.i][this.j]=this.miServicio.vgf;
        //Cargar MSN
        this.j=3;
        this.csvData[this.i][this.j]=this.miServicio.msn;
        //Cargar Version
        this.j=4;
        this.csvData[this.i][this.j]=this.miServicio.version;
        //Cargar Upper/Lower
        this.j=5;
        this.csvData[this.i][this.j]=this.miServicio.upperlower;
        //Cargar Frame
        this.j=6;
        this.csvData[this.i][this.j]=this.fr1;
        //Cargar Omega
        this.j=7;
        this.csvData[this.i][this.j]=this.str1;
        //Cargar Lado
        this.j=8;
        this.csvData[this.i][this.j]=this.lado;
        //Cargar Interior/Exterior
        this.j=9;
        this.csvData[this.i][this.j]=this.intpiel;
        //Cargar Nudo
        this.j=10;
        this.csvData[this.i][this.j]=this.nudo;
        //Cargar Comentario
        this.j=11;
        this.csvData[this.i][this.j]=this.comentario;
        //Cargar Remaches
        this.j=12;
        this.csvData[this.i][this.j]=this.q;
        //Cargar Remaches
        this.j=13;
        this.csvData[this.i][this.j]=this.p;





        //Guardar Todo en el Servicio
        this.miServicio.tabla=this.csvData;    
      }

// Escribir en modelo tabla CSV -----------------------------------


ocultaromegastraseras(){
this.omegastras=false;
  }

 
iratabla(){
this.navCrtl.navigateForward('/tabla');
}


marcarfr(fr){
if(fr==99|| fr==100 || fr==101 || fr==102){
  this.ocultaromegastraseras();
}
else{this.omegastras=true;}



this.fr1=fr;  
console.log("fr1 "+this.fr1);
this.framecolor="success";
  
}






marcaromega(str){

  this.str1=str;
  console.log("str1 "+this.str1);
  this.omegacolor="success";
  
  }
 
 

marcarlado(lad){
  this.lado=lad;
  if (lad=="LH") {
    this.LHcolor="success"
    this.RHcolor=""
  }
  else{
    this.RHcolor="success"
    this.LHcolor=""
  }
}

marcarnudo(nud){
  this.nudo=nud;
  this.Nudocolor="success"
  
}

marcarintpiel(ip){
  this.intpiel=ip;
  if (ip=="INTERIOR") {
    this.interiorcolor="success"
    this.pielcolor="tertiary"
  }
  else{
    this.pielcolor="success"
    this.interiorcolor="tertiary"
  }

}

remache(){
  
  if (this.q==undefined) {
    this.q=0;
  }

  this.comentario="FALTAN " +this.q+ " REMACHES EN FR " +this.fr1+" " +this.lado+ " STRG " +this.str1+ " ZONA " + this.nudo + " " + this.intpiel;
  console.log(this.comentario);
  this.p=0;
  this.nuevalinea();
  this.aviso();
}

pieza(){

  if (this.q==undefined) {
    this.q=0;
  }

  this.comentario="FALTAN " +this.q+ " PIEZAS EN FR " +this.fr1+" " +this.lado+ " STRG " +this.str1+ " ZONA " + this.nudo + " " + this.intpiel;
  console.log(this.comentario);
  this.p=this.q;
  this.q=0;
  this.nuevalinea();
  this.aviso();
}

remachenc(){

  if (this.q==undefined) {
    this.q=0;
  }

  this.comentario="FALTAN " +this.q+ " REMACHES EN FR " +this.fr1+" " +this.lado+ " STRG " +this.str1+" ZONA " + this.nudo + " " + this.intpiel + " [NC]";
  console.log(this.comentario);
  this.q=0;
  this.p=0;
  this.nuevalinea();
  this.aviso();

}

piezanc(){

  if (this.q==undefined) {
    this.q=0;
  }

  this.comentario="FALTAN " +this.q+ " PIEZAS EN FR " +this.fr1+" " +this.lado+ " STRG " +this.str1+" ZONA " + this.nudo + " " + this.intpiel + " [NC]";
  console.log(this.comentario);
  this.q=0;
  this.p=0;
  this.nuevalinea();
  this.aviso();

}

otros(){
  this.nuevalinea();
  this.aviso();
}

async aviso() {
  const toast = await this.toastController.create({

    position: 'middle',
    color: 'success',
    message: 'Registrado!',
    duration: 500,
    
    
  });
  
  toast.present();
  this.lineas=this.lineas+1;
  this.resetearvariables();
}

async popupotros() {

  const alert = await this.alertController.create({
    header: 'Comentario Manual',
    message: 'Añade aquí todo lo que no puedas hacer mediante los botones. Recuerda haber marcado antes al menos la "Frame" la "Omega" y el "Lado" ',
    inputs: [
      {
        name: 'comentario',
        type: 'text',
        placeholder: 'Comentario'
      },
      {
        name: 'cantidad',
        type: 'number',
        placeholder: 'Cantidad (Si Fuera Necesario)'
        
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Registrar',
        handler: () => {
          this.otros();
          console.log('Confirm Ok');
        }
      }
    ]
  });

  await alert.present();

 }

resetearvariables(){

this.q=undefined;
this.comentario=undefined;
this.intpiel="";
this.nudo="";
this.fr1="";
this.fr2="";
this.str1="";
this.str2="";
this.lado="";
this.RHcolor="";
this.LHcolor="";
this.Nudocolor="medium";
this.interiorcolor="tertiary";
this.pielcolor="tertiary";
this.omegacolor="primary";
this.framecolor="primary";

}

}
