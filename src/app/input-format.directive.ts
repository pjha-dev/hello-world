import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log('on focus');
  }

  @Input('format') format!: String;

  @HostListener('blur') onblur() {
    let _value: string = this.el.nativeElement.value;

    if (this.format == 'uc') {
      this.el.nativeElement.value = _value.toUpperCase();
    } else if (this.format == 'lc') {
      this.el.nativeElement.value = _value.toLowerCase();
    }


  }

}
