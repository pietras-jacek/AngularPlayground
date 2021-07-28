import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: any;
  reviewed = false;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(
      +this.activatedRoute.snapshot.params.eventId
    );
  }
  toggleReviewed(): any{
    this.reviewed = !this.reviewed;
    console.log(this.reviewed);
  }
}
