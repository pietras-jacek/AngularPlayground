import { EventListComponent } from './event-list/event-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: '**', redirectTo: 'events' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
