import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appItalicsFont]',
  standalone: true
})
export class ItalicsFontDirective {

  @Output() hover = new EventEmitter();

  constructor(private element: ElementRef<HTMLElement>) { }
/* Adiciona lógica para evento 'input' de um mouse */
  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.fontStyle = 'italic';
    this.hover.emit();
  }
/* Adiciona lógica para evento 'output' de um mouse */
  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.fontStyle = 'normal';
  }

}
