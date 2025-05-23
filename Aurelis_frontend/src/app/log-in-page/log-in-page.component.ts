import { Component } from '@angular/core';
import { LogInButtonComponent } from '../log-in-button/log-in-button.component';

@Component({
  selector: 'app-log-in-page',
  imports: [LogInButtonComponent],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.scss',
  standalone: true,
})
export class LogInPageComponent {}
