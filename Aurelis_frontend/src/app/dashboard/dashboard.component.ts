import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { dataMock } from '../../data-mock';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { LogOutButtonComponent } from '../log-out-button/log-out-button.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    LogOutButtonComponent,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {
  public data: any = [];
  public selectedData: any = {};
  public user: BehaviorSubject<any> = new BehaviorSubject({ email: '' });

  constructor(
    private httpService: HttpService,
    private authService: AuthenticationService,
  ) {}

  public ngOnInit(): void {
    this.data = dataMock;
    this.selectedData = dataMock[0];
    // this.httpService.getData().subscribe((data: any) => {
    //   this.data = data;
    //   this.selectedData = data[0];
    // });

    this.user = this.authService.getUser();

    this.authService.getUser().subscribe((user: any) => {
      console.log(user);
    });
  }

  public convertToBrowserLocaleDate(
    unix_ts: number,
    locale: string = navigator.language,
    options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    },
  ): string {
    const date = new Date(unix_ts * 1000);
    return date.toLocaleString(locale, options);
  }

  public isMailNotSameAsName(mail: string, name: string): boolean {
    return mail !== name;
  }
}
