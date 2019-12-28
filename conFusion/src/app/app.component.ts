import { Component } from '@angular/core';

@Component({
  // you can see this Component is select
  // the whole app-root
  // so changing its template and scss
  // will affect the whole app
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conFusion';
}
