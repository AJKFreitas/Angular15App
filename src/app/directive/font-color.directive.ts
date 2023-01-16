import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFontColor]',
  standalone: true
})
export class FontColorDirective {

  @Input() color = 'red';

  constructor(private element: ElementRef<HTMLElement>) { }

  /* Adiciona lógica para evento 'input' de um mouse */
  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.color = this.color;
  }

  /* Adiciona lógica para evento 'output' de um mouse */
  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.color = 'black';
  }

}
