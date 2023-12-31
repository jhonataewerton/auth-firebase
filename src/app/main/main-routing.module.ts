import { PeopleComponent } from './people/people.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'people'},
  { path: 'people', component: PeopleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
