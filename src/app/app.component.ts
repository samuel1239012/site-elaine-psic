import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './topo/topo.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TopoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Corrigido para styleUrls
})
export class AppComponent {
  title = 'Site-Psych';


  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 100); // pequeno delay para garantir que foi renderizado
    }
  }
}
