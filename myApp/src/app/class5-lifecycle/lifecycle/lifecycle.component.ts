import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('name') name = '';

  constructor() {
    console.log('constructor Called');
  }
  ngOnChanges() {
    console.log('OnChanges Called');
  }
  ngOnInit() {
    console.log('OnInit Called');
  }
  ngDoCheck() {
    console.log('OnDoCheck Called');
  }
  ngAfterContentInit() {
    console.log('After content init');
  }
  ngAfterContentChecked() {
    console.log('Do check Content');
  }
  ngAfterViewInit() {
    console.log('View Init');
  }
  ngAfterViewChecked() {
    console.log('view do check');
  }
  ngOnDestroy() {
    console.log('component destroyed');
  }
}
