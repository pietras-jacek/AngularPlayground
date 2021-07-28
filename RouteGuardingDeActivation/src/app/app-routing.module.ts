import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsActivator } from './event-details/event-details-activator.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsListComponent } from './events-list/events-list.component';

const routes: Routes = [
  { path: 'events', component: EventsListComponent },
  {
    path: 'events/:eventId',
    component: EventDetailsComponent,
    canActivate: [EventDetailsActivator],
    canDeactivate: [EventDetailsActivator]
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
