import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  public heroes: string[] = ['Capitan America', 'SpiderMan', 'Goku', 'SuperMan']
  public heroeBorrado?: string = ''

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || ''
  }

}
