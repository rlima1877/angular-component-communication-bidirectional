import { Component } from '@angular/core'

@Component({
  selector: 'events-list',
  template: `
  <div>
  <h1>Upcoming Angular Events</h1>
  <hr/>

  <!-- PASSING DATA FROM PARENT TO CHILD -->
  <!-- [myEvent] received end -->
  <!-- "event" sending end -- data we're passing from parent -->

  <!-- PASSING DATA FROM CHILD TO PARENT via event -->
  <!-- (eventClick) is the @Output variable in the child -->
  <!-- $event is the data we're passing when we call .emit("data") in the child -->
  <!-- handleEventClicked() a function we just created so we can use the event data-->
  <event-thumbnail (eventClick)="handleEventClicked($event)" [eventData]="event"></event-thumbnail>
</div>
  `
})
export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnected-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };

  handleEventClicked(data) {
    console.log('received: ', data);
  }
}
