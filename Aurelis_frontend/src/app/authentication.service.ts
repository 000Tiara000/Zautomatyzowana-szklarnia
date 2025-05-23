import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: AuthService) {}

  public logIn(): void {
    this.auth.loginWithRedirect();
  }

  public logOut(): void {
    this.auth.logout({
      logoutParams: { returnTo: 'https://aurelis.netlify.app/' },
    });
  }

  public isAuthenticated(): any {
    return this.auth.isAuthenticated$;
  }
  public getUser(): any {
    return this.auth.user$;
  }
}
