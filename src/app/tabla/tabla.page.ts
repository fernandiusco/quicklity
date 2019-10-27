import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { Platform, NavController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AjustesService } from '../ajustes.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {

  msn:string;
  vgf:string;
  version:string;
  titulo:string;

  csvData: any[]=[];
  headerRow:any []=[];

  constructor(private http:HttpClient, private papa: Papa, private plt: Platform, private miServicio: AjustesService,
    private file: File,
    private socialSharing: SocialSharing,
    public NavCrtl: NavController) { 
    this.loadCSV();
  }

  private loadCSV(){
    this.http.get('./assets/modelo.csv', {
      responseType: 'text'
    }).subscribe(
      data=> this.extractData(data),
      err => console.log('error: ',err),
    )
  }
  ngOnInit() {

    this.msn=this.miServicio.msn;
    this.version=this.miServicio.version;
    this.vgf=this.miServicio.vgf;
    this.titulo='QG_MSN'+this.msn+'_'+this.version+'_'+this.vgf+'.csv';
    
  }

  extractData(res) {
  let csvData= res || '';

  this.papa.parse(csvData,{

    complete: parsedData=>{
     this.headerRow=parsedData.data.splice(1,0)[0];
     this.csvData=this.miServicio.tabla;
     
    }
  })
  }

  trackByFn(index:any, item:any){
  return index;
  }

  exportCSV() {
    let csv = this.papa.unparse({
      fields: this.headerRow,
      data: this.csvData
    });
 
    if (this.plt.is('cordova')) {
      this.file.writeFile(this.file.dataDirectory, this.titulo , csv, {replace: true}).then( res => {
        this.socialSharing.share(null, null, res.nativeURL, null).then(e =>{
          // Success
        }).catch(e =>{
          console.log('Share failed:', e)
        });
      }, err => {
        console.log('Error: ', err);
      });
 
    } else {
      // Dummy implementation for Desktop download purpose
      var blob = new Blob([csv]);
      var a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = this.titulo;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  volver(){
this.NavCrtl.navigateBack('/marcador');
  }
 
 
}
 

