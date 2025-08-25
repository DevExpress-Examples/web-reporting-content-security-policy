import { CSP_NONCE, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';


// For demonstration purposes only.
// Generate a random number, unique for each HTTP request.
const HARDCODED_NONCE = 'randomNonceGoesHere';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    { provide: CSP_NONCE, useValue: HARDCODED_NONCE }]
};
