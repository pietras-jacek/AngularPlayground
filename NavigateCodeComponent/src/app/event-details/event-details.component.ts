import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: any;
  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(
      +this.activatedRoute.snapshot.params.eventId
    );
  }

  returnToEvents(): void {
    this.router.navigate(['/events']);
  }
}
