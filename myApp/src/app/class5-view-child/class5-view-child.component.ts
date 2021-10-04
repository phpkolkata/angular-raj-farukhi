import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-class5-view-child',
  templateUrl: './class5-view-child.component.html',
  styleUrls: ['./class5-view-child.component.css'],
})
export class Class5ViewChildComponent {
  @ViewChild('nm') nm: ElementRef<HTMLInputElement> = <ElementRef>{};
  // @ViewChild('box') box: ElementRef = <ElementRef>{};
  @ViewChild('box') box!: ElementRef;

  constructor(private rederer: Renderer2) {}

  getName(nm: HTMLInputElement) {
    console.log('your name is ', nm.value);
  }
  getMyName() {
    console.log('your name is ', this.nm.nativeElement.value);
  }

  chBg() {
    // this.box.nativeElement.style.backgroundColor = 'red';
    this.rederer.setStyle(this.box.nativeElement, 'backgroundColor', 'red');
  }
}
