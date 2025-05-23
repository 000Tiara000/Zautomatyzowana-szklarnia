import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-log-in-button',
  imports: [],
  templateUrl: './log-in-button.component.html',
  standalone: true,
  styleUrl: './log-in-button.component.scss',
})
export class LogInButtonComponent {
  constructor(public authService: AuthenticationService) {}
}
