import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cinema-booking';

  constructor(private router: Router) {}

  goToBookPage() {
    this.router.navigate(['BookMovie']);
  }

  goToHomepage() {
    this.router.navigate(['home']);
  }
}
