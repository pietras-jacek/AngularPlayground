import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  obs: any;
  result: any;
  promise: any;

  constructor() {
    this.obs = of(35);
  }

  ngOnInit() {
    // put code here
    this.promise = this.obs.toPromise();
  }

  listen() {
    this.promise.then((val: any) => {
      this.result = val;
    });
  }
}
