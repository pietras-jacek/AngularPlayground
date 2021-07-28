import { TestBed } from '@angular/core/testing';

import { EventDetailsActivator } from './event-details-activator.service';

describe('EventDetailsActivatorService', () => {
  let service: EventDetailsActivator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDetailsActivator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
