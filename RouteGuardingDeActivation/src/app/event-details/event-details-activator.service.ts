import { EventService } from './../event.service';
import { Injectable, Component } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EventDetailsActivator implements CanActivate, CanDeactivate<EventDetailsActivator> {
  reviewed: boolean;

  constructor(
    private eventService: EventService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): any {
    const event = this.eventService.getEvent(+route.params.eventId);

    if (!event) {
      this.router.navigate(['']);
    }
    return !!event;
  }

  canDeactivate(component: EventDetailsActivator): any {
    return component.reviewed;
  }
}
