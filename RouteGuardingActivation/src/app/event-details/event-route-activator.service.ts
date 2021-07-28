import { EventService } from './../event.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const eventExist = !!this.eventService.getEvent(+route.params.eventId);

    if (!eventExist) {
      this.router.navigate(['']);
    }
    return eventExist;
  }
}
