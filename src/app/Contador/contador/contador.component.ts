import { Component } from '@angular/core';



@Component({
    selector: 'contador-app',
    template: `
    <h1>{{title}}</h1>
    <h3>Base : {{base}}</h3>
    
    <button (click)=" acumular(base) ">+1</button>
    
    
    <span>{{contador}}</span>
    <button (click)=" acumular(-base)">-1</button>
    
    <button (click)=" contador= 0">Reset</button>
    `
})
export class ContadorComponet {

    public title: string = 'Contador App';


    public contador: number = 0;

    public base: number = 5;


    acumular(valor: number) {
        this.contador += valor;
    }
}