import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  loaded = false;
  climaDia: any = [];
  lista = [1,2,3,4];

  constructor(private clima: ClimaService) {}

  ngOnInit() {
    this.clima.getinfo().subscribe(
      data => {
        this.loaded = true;
        this.climaDia = data.clima;
       console.log(this.climaDia);
      }, error => {
        alert('Ocurrio un Error');
        console.log(error);
      }
    );
  }

  tomarFoto(tiempo) {
    var despejado = '../../assets/img/weather.png',
        nublado = '../../assets/img/cloudy.png',
        parnublado = '../../assets/img/meteorology.png',
        lluvia = '../../assets/img/storm.png',
        nieve = '../../assets/img/snowflake.png',
        truenos = '../../assets/img/thunderstorm.png',
        truenosYlluvia = '../../assets/img/climate.png';

    if (tiempo === 'clear'){
      return despejado
    }
    if (tiempo === 'cloudy'){
      return nublado
    }
    if (tiempo === 'partly cloudy'){
      return parnublado
    }
    if (tiempo === 'rain'){
      return lluvia
    }
    if (tiempo === 'snow'){
      return nieve
    }
    if (tiempo === 'thunderstorm'){
      return truenos
    }
    if (tiempo === 'thunderstorm with rain'){
      return truenosYlluvia
    }
  }

  formatearFecha(fecha){

    var año = fecha.toString().substring(0, 4),
        mes = fecha.toString().substring(4, 6),
        dia = fecha.toString().substring(6, 8);

    return dia +' / '+ mes +' / '+ año
  }
}
