import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { HomeComponent } from './home';
import { NoContent } from './no-content';

import { FormsComponent } from './forms/forms.component';
import { PanelsAndWellsComponent } from './panels-and-wells/panels-and-wells.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { GridComponent } from './grid/grid.component';
import { TablesComponent } from './tables/tables.component';

import { DataResolver } from './app.resolver';

export const routes: RouterConfig = [
  { path: '',      component: HomeComponent },
  { path: 'dashboard',  component: HomeComponent },
  { path: 'forms', component: FormsComponent},
  { path: 'panels-and-wells', component: PanelsAndWellsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'tables', component: TablesComponent },
  // make sure you match the component type string to the require in asyncRoutes
  { path: 'about', component: 'About',
    resolve: {
      'yourData': DataResolver
    }},
  // async components with children routes must use WebpackAsyncRoute
  { path: 'detail', component: 'Detail',
    canActivate: [ WebpackAsyncRoute ],
    children: [
      { path: '', component: 'Index' }  // must be included
    ]},
  { path: '**',    component: NoContent },
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  'About': require('es6-promise-loader!./about'),
  'Detail': require('es6-promise-loader!./+detail'),
  'Index': require('es6-promise-loader!./+detail'), // must be exported with detail/index.ts
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  asyncRoutes['About'],
  asyncRoutes['Detail'],
   // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
