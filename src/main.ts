import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';  // Certifique-se de que appConfig está configurado corretamente
import { AppComponent } from './app/app.component';  // Importando o AppComponent standalone

bootstrapApplication(AppComponent, appConfig)  // Bootstrap da aplicação
  .catch((err) => console.error(err));  // Em caso de erro
