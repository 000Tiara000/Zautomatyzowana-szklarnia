import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent, LogInPageComponent, AsyncPipe, NgIf],
  // imports: [DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Aurelis';

  constructor(public authService: AuthenticationService) {}
}
