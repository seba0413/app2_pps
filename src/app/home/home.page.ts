import { Component, OnInit } from '@angular/core';
import { Animales } from '../../data/animales';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  list: any[] = [];
  audio = new Audio();
  audioTiempo: any;
  idioma = 0;

  constructor() {}

  reproducir( item ) {
    console.log('item', item);

    this.pausarAudio(item);

    if (item.reproduciendo) {
      item.reproduciendo = false;
      return;
    }

    switch (this.idioma) {
      case 0:
        this.audio.src = item.esp;
        break;
      case 1:
        this.audio.src = item.ing;
        break;
      case 2:
        this.audio.src = item.por;
        break;
    }

    this.audio.load();
    this.audio.play();

    item.reproduciendo = true;

    this.audioTiempo = setTimeout(() => item.reproduciendo = false, item.duracion * 1000);
  }

  private pausarAudio( item: any ) {
    clearTimeout( this.audioTiempo );

    this.audio.pause();
    this.audio.currentTime = 0;

    for ( const i of this.list ) {
      if ( i.nombre !== item.nombre ) {
        i.reproduciendo = false;
      }
    }
  }

  ngOnInit() {
     this.list = Animales.listaAnimales;
  }

}
