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
      this.events = data;
    } catch (error) {
      console.log(error)
    }
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
