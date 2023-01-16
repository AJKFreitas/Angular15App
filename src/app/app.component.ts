import { Component } from '@angular/core';
import { MouseHoverDirective } from './directive/mouse-hover.directive';
import { StandaloneTestComponent } from "./standalone-test/standalone-test.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [StandaloneTestComponent, MouseHoverDirective]
})
export class AppComponent {
  mouseHoverEvent() {
    console.log('Evento Hover Funcionando!')
  }
}
