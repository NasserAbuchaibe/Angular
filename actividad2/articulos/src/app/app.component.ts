import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];


  datos: Articulo[] = [new Articulo(1, 'Torta chocolate', 20000),
  new Articulo(2, 'Torta de veinilla', 20000),
  new Articulo(3, 'Cafe capuchino', 4000),
  new Articulo(4, 'Frappe', 4000),
  ];



  @ViewChild(MatTable)
  tabla1!: MatTable<Articulo>;

  showMainContent: Boolean = false;
  articuloEliminado!: Articulo;



  borrarFila(cod: number) {
    if (confirm("¿Realmente quiere borrarlo?")) {
      this.articuloEliminado = this.datos[cod];
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
      this.showMainContent = true
    }
  }

  ShowHideButton() {
    this.showMainContent = this.showMainContent ? false : true;
  }

}


export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}


