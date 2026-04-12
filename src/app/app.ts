import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root', // tells name of HTML tag to be used for this component
  imports: [RouterOutlet, Header], 
  // template is the HTML code that defines what this component displays
  template: `
    <app-header/>
    <main>
      <router-outlet/>
    </main>
  `,
  styles: [
    `
      main {
        padding: 16px;
      }
    `
  ],
})
export class App {
  protected readonly title = signal('first-ng-app');
}
