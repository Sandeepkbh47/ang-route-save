import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouteReuseStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { CustomReuseStrategy } from './custom-reuse-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy,
    },
  ],
};
