import { Component, Input } from '@angular/core';
import { Event } from '../event/event.interface';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  @Input() event: Event;

  convertDate(date: number): string{
    if(date < 0){
      return Math.abs(date).toString() + ' BC'
    }
    else{
      return date.toString() + ' AD'
    }
  }
  
  constructor(){
    this.event = {
      name: '',
      img: '',
      text: '',
      date: 0
    }
  }
}
