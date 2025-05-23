import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideAuth0({
      //TODO: change for netlify deploy
      domain: 'dev-3depsjk64hacxepw.us.auth0.com',
      clientId: 'ybT8u4M9fC6GoemZw0EYhzkYH8usrPmA',
      authorizationParams: {
        redirect_uri: 'https://aurelis.netlify.app/',
      },
    }),
  ],
};
