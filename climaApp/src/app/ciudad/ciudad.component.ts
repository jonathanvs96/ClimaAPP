import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../clima.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  loaded = false;
  infoCiudad: any;
  

constructor(private ubicacion: ClimaService) {}
  ngOnInit() {
    this.ubicacion.getinfo().subscribe(
      data => {
        this.loaded = true;
        this.infoCiudad = data.info;
        console.log(data);
      }, error => {
        alert('Ocurrio un Error');
        console.log(error);
      }
    );
  }

  getHora() {
    var fecha = new Date(),
        hora = fecha.getHours(),
        minutos = fecha.getMinutes();

    return hora+':'+minutos
  }
}
