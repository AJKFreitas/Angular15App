import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-test.component.html',
  styleUrls: ['./standalone-test.component.css']
})
export class StandaloneTestComponent {

}
