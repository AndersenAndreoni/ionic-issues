import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  public rangeValue: number = 50;
  updatePin(value: number) {
    let n = this.rangeValue + value;
    return n;
  }
}
