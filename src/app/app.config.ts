// app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi /*, withFetch*/ } from '@angular/common/http';

import { routes } from './app.routes';

// Opcional: se você realmente precisa do ng-circle-progress via DI,
// forneça um objeto com useValue
import { CircleProgressOptions } from 'ng-circle-progress';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(
      withInterceptorsFromDi(), // mantenha se usa HTTP_INTERCEPTORS baseados em DI
      // withFetch() // opcional
    ),

    // ✅ Só mantenha isso se você injeta CircleProgressOptions em algum lugar.
    // Caso contrário, remova para evitar provider “vazio”.
    { 
      provide: CircleProgressOptions, 
      useValue: {
        // exemplo de config:
        radius: 60,
        outerStrokeWidth: 10,
        innerStrokeWidth: 5,
        showUnits: false,
        showSubtitle: false
      } as CircleProgressOptions
    },
  ],
};
