import { Component } from '@angular/core';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [EventComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

}
