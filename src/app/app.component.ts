import { Component }         from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterOutlet }      from '@angular/router';
import { NavbarComponent }   from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
    ])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
