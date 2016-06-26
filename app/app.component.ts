import { Component }       from '@angular/core';
import { CardService }     from './card/service/card.service';
import { CardComponent } from './card/card.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Cards']">Cards</a>
  </nav>
  <router-outlet></router-outlet>
`,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    CardService
  ]
})
@RouteConfig([
  {
    path: '/cards',
    name: 'Cards',
    component: CardComponent,
    useAsDefault: true
  }
])
export class AppComponent {
  title = 'List of Cards';
}