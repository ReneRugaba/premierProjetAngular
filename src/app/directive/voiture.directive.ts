import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector:'[backgroundHover]'
})

export class VoitureDirective implements OnInit{
    
    constructor(
        private elementRef: ElementRef,
        private renderer:Renderer2){}

    ngOnInit(){
        
    }

   
    


    @HostListener('mouseenter') mouseover(){
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');

    
    }

    @HostListener('mouseleave') mouseleave(){
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
   
    }
}