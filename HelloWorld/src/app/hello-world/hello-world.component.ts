import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  nombre: string;
  ciudad: string;
  cadena: string;
 

  constructor() { 

    this.nombre = "Nasser Abuchaibe";
    this.ciudad = "Monteria";
    this.cadena = this.nombre.concat(' ', this.ciudad)
  }

  ngOnInit(): void {
  }

}
