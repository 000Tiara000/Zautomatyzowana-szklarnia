import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-log-out-button',
  imports: [],
  templateUrl: './log-out-button.component.html',
  standalone: true,
  styleUrl: './log-out-button.component.scss',
})
export class LogOutButtonComponent {
  constructor(public authService: AuthenticationService) {}
}
