import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { MyDateComponent } from '../my-date/my-date.component';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css'],
})
export class MyPageComponent implements OnInit, AfterContentInit {
  // @ContentChild(MyDateComponent) myDate: MyDateComponent = <MyDateComponent>{};
  @ContentChildren(MyDateComponent) myDate!: QueryList<MyDateComponent>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    console.log(this.myDate.toArray()[0].today);
  }
}
