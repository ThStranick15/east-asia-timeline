import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from '../event/event.component';
import { DetailComponent } from '../detail/detail.component';
import { Event } from '../event/event.interface';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, EventComponent, DetailComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit{
  events: any[] = [];

  ngOnInit(): void {
      this.getEvents()
  }

  async getEvents(){
    try {
      const res = await fetch('/api/events');
      const data = await res.json();
      console.log(data)
      data.sort(this.sortEvents)
      console.log(data)
      this.events = data;
    } catch (error) {
      console.log(error)
    }
  }

  sortEvents(a: Event, b: Event){
    const date1 = a.date;
    const date2 = b.date;
    let compare = 0;
    if(date1 > date2){
      compare = 1
    } else if(date1 < date2){
      compare = -1
    }
    return compare
  }

  convertDate(date: number): string{
    if(date < 0){
      return Math.abs(date).toString() + ' BC'
    }
    else{
      return date.toString() + ' AD'
    }
  }

  openDetail(e: Event){
    let el = document.getElementById('detail')!;
    el.style.display = "block";
    el.querySelector('#detailName')!.textContent = e.name;
    el.querySelector('#detailDate')!.textContent = this.convertDate(e.date);
    el.querySelector('img')!.src = e.img;
    el.querySelector('#detailText')!.textContent = e.text;
    document.body.style.overflow= 'hidden';
  }
}
