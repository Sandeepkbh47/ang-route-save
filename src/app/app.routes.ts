import { Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
    children: [
      {
        path: 'result',
        component: ResultComponent,
        data: { shouldReuse: true },
      },
      { path: 'config', component: ConfigComponent },
    ],
  },

  //   {
  //     path: '',
  //     component: AppComponent,
  //   },
];
