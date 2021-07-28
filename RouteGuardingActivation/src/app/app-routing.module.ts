import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventRouteActivatorService } from './event-details/event-route-activator.service';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'events/:eventId', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
