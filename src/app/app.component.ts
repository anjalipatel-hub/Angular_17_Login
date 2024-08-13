import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
                  <!-- <app-login></app-login> -->
                  <app-sign-up></app-sign-up>
            </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SignUp';
}
