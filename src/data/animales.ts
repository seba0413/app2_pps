import { Entidad } from '../modelos/entidad';

export class Animales {

    public static listaAnimales: Entidad[] = [
        {
            nombre: 'perro',
            imagen: '/assets/perro.png',
            esp: './assets/Audios/Animales/Perro.mp3',
            ing: './assets/Audios/Animales/Dog.mp3',
            por: './assets/Audios/Animales/Cachorro.mp3',
            duracion: 2,
            reproduciendo: false
        },
        {
            nombre: 'gato',
            imagen: '/assets/gato.png',
            esp: './assets/Audios/Animales/Gato.mp3',
            ing: './assets/Audios/Animales/Cat.mp3',
            por: './assets/Audios/Animales/Gaatu.mp3',
            duracion: 2,
            reproduciendo: false
        },
        {
            nombre: 'leon',
            imagen: '/assets/leon.png',
            esp: './assets/Audios/Animales/Leon.mp3',
            ing: './assets/Audios/Animales/Lion.mp3',
            por: './assets/Audios/Animales/Leau.mp3',
            duracion: 2,
            reproduciendo: false
        },        {
            nombre: 'elefante',
            imagen: '/assets/elefante.png',
            esp: './assets/Audios/Animales/Elefante.mp3',
            ing: './assets/Audios/Animales/Elephant.mp3',
            por: './assets/Audios/Animales/Elefanchi.mp3',
            duracion: 2,
            reproduciendo: false
        },        {
            nombre: 'cuervo',
            imagen: '/assets/cuervo.png',
            esp: './assets/Audios/Animales/Cuervo.mp3',
            ing: './assets/Audios/Animales/Raven.mp3',
            por: './assets/Audios/Animales/Corvo.mp3',
            duracion: 2,
            reproduciendo: false
        },
    ];
}
