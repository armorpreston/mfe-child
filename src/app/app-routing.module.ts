import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NestComponent } from './nest/nest.component';


const routes: Routes = [{
  path: 'kid-a/nest',
  component: NestComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
