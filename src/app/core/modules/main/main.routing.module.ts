import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { MainComponent } from './main.component';

const MainRoutes: Routes = [
  { path: '', component: MainComponent,
    children: [
      // add modules for main app
      // { path: 'some-path', loadChildren: '../path/example.module#ExampleModule'},
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(MainRoutes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule { }
