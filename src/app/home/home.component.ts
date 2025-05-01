import { Component } from '@angular/core';
import { PrecosComponent } from "../precos/precos.component";
import { DuvidasComponent } from "../duvidas/duvidas.component";
import { FooterComponent } from "../footer/footer.component";
import { TopoComponent } from "../topo/topo.component";

@Component({
  selector: 'app-home',
  imports: [PrecosComponent, DuvidasComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
