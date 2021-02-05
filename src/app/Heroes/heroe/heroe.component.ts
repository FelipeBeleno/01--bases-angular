import { Component } from "@angular/core";

@Component({
    templateUrl: 'heroe.component.html',
    selector: 'heroe-app'
})

export class HeroeComponent {

    public nombre: string = 'Iron Man';
    public edad: number = 42;


    obtenerNombre(): string {
        return `El nombre es: ${this.nombre} y la edad: ${this.edad}`;
    }

    cambiarNombre(value: string) {
        this.nombre = value;
    }
    cambiarEdad(value: number) {
        this.edad = value;
    }


}