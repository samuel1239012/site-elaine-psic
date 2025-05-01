import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-topo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent {
  activeLink: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/' || this.router.url === '/home' ) {
      this.activeLink = 'home';
    }
  }

  ngAfterViewInit(): void {
    // Adiciona verificação para garantir que document está acessível
    if (typeof document !== 'undefined') {
      console.log('document acessível');
    }
  }



  scrollToPrecos(event: Event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    const target = document.getElementById('precos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Elemento com id "precos" não encontrado');
    }
  }

  scrollToDuvidas(event: Event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    const target = document.getElementById('duvidas');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Elemento com id "duvidas" não encontrado');
    }
  }

  setActive(link: string): void {
    this.activeLink = link;
  }

  isActive(link: string): boolean {
    return this.activeLink === link;
  }
}
