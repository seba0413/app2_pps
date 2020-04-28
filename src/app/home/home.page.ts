import { Component, OnInit } from '@angular/core';
import { Animales } from '../../data/animales';
import { Colores } from '../../data/colores';
import { Entidad } from 'src/modelos/entidad';
import { Numero } from 'src/data/numeros';
import { AuthService } from '../servicios/auth.service';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  list: any[] = [];
  animales: Entidad[] = Animales.listaAnimales;
  colores: Entidad[] = Colores.listaColores;
  numeros: Entidad[] = Numero.listaNumeros;
  audio: Howl = null;
  audioTiempo: any;
  idioma = 0;

  constructor( private authService: AuthService) {}

  reproducir( item ) {

    if (item.reproduciendo) {
      item.reproduciendo = false;
      return;
    }

    switch (this.idioma) {
      case 0:
        this.audio =  new Howl({
          src: [item.esp]
        });
        break;
      case 1:
        this.audio = new Howl({
          src: [item.ing]
        });
        break;
      case 2:
        this.audio = new Howl({
          src: [item.por]
        });
        break;
    }

    this.audio.play();

    item.reproduciendo = true;

    this.audioTiempo = setTimeout(() => item.reproduciendo = false, item.duracion * 1000);
  }

  // private pausarAudio( item: any ) {
  //   clearTimeout( this.audioTiempo );

  //   this.audio.pause();
  //   this.audio.currentTime = 0;

  //   for ( const i of this.list ) {
  //     if ( i.nombre !== item.nombre ) {
  //       i.reproduciendo = false;
  //     }
  //   }
  // }

  cambiarIdioma(idioma: number) {

    switch (idioma) {
      case 0:
        this.idioma = 0;
        break;
      case 1:
        this.idioma = 1;
        break;
      case 2:
        this.idioma = 2;
        break;
    }
  }

  cambiarTipo(tipo: number) {
    this.list = [];

    switch (tipo) {
      case 0:
        this.list = this.animales;
        break;
      case 1:
        this.list = this.colores;
        break;
      case 2:
        this.list = this.numeros;
        break;
    }

  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
     this.list = Animales.listaAnimales;
  }

}
