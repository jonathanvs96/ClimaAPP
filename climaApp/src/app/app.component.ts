import { Component, OnInit  } from '@angular/core';
// import { ClimaService } from './clima.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

//   info:any = [];

// constructor(private ubicacion: LocalizacionService) {}

//   ngOnInit() {
//     this.ubicacion.getLocalizacion().subscribe(
//       data => {
//         this.info = data
//         console.log(this.info)
//         // this.climaDia = data.clima.dataseries;
//         // this.climaHoy = data.clima.dataseries[0];
//         // this.climaDia.formatDate = formatDate('' + this.climaDia.date, 'short', 'en-US');
//       }, error => {
//         alert('Ocurrio un Error');
//         console.log(error);
//       }
//     );
//   }

  // loaded = false;
  // cityInfo: any;
  // climaHoy: any;

  // constructor(private clima: ClimaService) {}

  // ngOnInit() {
  //   this.clima.getinfo().subscribe(
  //     data => {
  //       console.log(data);
  //       this.loaded = true;
  //       this.cityInfo = data.info;
  //       this.climaHoy = data.clima.dataseries;
  //       // this.climaHoy = data.clima.dataseries[0];
  //       // this.climaHoy.formatDate = formatDate('' + this.climaHoy.date, 'short', 'en-US');
  //     }, error => {
  //       alert('Ocurrio un Error');
  //       console.log(error);
  //     }
  //   );
  // }
}
