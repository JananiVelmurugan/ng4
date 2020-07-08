import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hey guys!</h1>
  <button [disabled]="status=='enabled'">My Button</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app works';

  //{{myObject.location}}
  // myObject={
  //   gender:'female',
  //   age: 30,
  //   location: 'India'
  // }

  //<li *ngFor="let arr of myArr">{{ arr }}</li>
  //myArr=['India','USA'];

  //<li *ngIf="myArr">Yeah, I exist.</li>
  //myArr=['India','USA'];

  //<li *ngIf="!myArr">No, I don't exist.</li>

  // <li *ngIf="myArr == 'something'">Yeah, I exist.</li>
  // <li *ngIf="myArr != 'something'">No, I don't exist.</li>
  // myArr='something';

  // <li *ngIf="myArr; else otherTmpl">Yeah, exist</li>
  // <ng-template #otherTmpl>No</ng-template>

  //<li *ngIf="myArr; then tmpl1 else tmpl2">Yeah, exist</li>
  // <ng-template #tmpl1>True</ng-template>
  // <ng-template #tmpl2>False</ng-template>
  //myArr='';

  // <img src="{{logo}}">
  // <img [src]="logo">
  // <img bind-src="logo">
  // logo='https://angular.io/assets/images/logos/angular/angular.png'

  // <button [disabled]="status">My Button</button>
  // status=true;

  // <button [disabled]="status">My Button</button>
  // status=false;

  // <button [disabled]="status=='enabled'">My Button</button>
  status = 'enabled';
}
