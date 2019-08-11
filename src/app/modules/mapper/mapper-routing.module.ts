import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapperComponent } from './pages/mapper.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: MapperComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MapperRoutingModule { }
