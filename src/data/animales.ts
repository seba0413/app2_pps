import { Entidad } from '../modelos/entidad';

export class Animales {

    public static listaAnimales: Entidad[] = [
        {
            nombre: 'perro',
            imagen: '/assets/perro.png',
            esp: 'http://programacion3utn.000webhostapp.com/Perro.mp3',
            ing: 'http://programacion3utn.000webhostapp.com/Dog.mp3',
            por: 'http://programacion3utn.000webhostapp.com/Cachorro.mp3',
            duracion: 2,
            reproduciendo: false
        },
        {
            nombre: 'gato',
            imagen: '/assets/gato.png',
            esp: 'http://programacion3utn.000webhostapp.com/Gato.mp3',
            ing: 'http://programacion3utn.000webhostapp.com/Cat.mp3',
            por: 'http://programacion3utn.000webhostapp.com/Gaatu.mp3',
            duracion: 2,
            reproduciendo: false
        },
        {
            nombre: 'leon',
            imagen: '/assets/leon.png',
            esp: 'http://programacion3utn.000webhostapp.com/Leon.mp3',
            ing: 'http://programacion3utn.000webhostapp.com/Lion.mp3',
            por: 'http://programacion3utn.000webhostapp.com/Leau.mp3',
            duracion: 2,
            reproduciendo: false
        },        {
            nombre: 'elefante',
            imagen: '/assets/elefante.png',
            esp: 'http://programacion3utn.000webhostapp.com/Elefante.mp3',
            ing: 'http://programacion3utn.000webhostapp.com/Elephant.mp3',
            por: 'http://programacion3utn.000webhostapp.com/Elefanchi.mp3',
            duracion: 2,
            reproduciendo: false
        },        {
            nombre: 'cuervo',
            imagen: '/assets/cuervo.png',
            esp: 'http://programacion3utn.000webhostapp.com/Cuervo.mp3',
            ing: 'http://programacion3utn.000webhostapp.com/Raven.mp3',
            por: 'http://programacion3utn.000webhostapp.com/Corvo.mp3',
            duracion: 2,
            reproduciendo: false
        },
    ];
}
