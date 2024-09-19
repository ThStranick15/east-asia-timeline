import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  closeDetail(){
    let el = document.getElementById('detail')!;
    el.style.display = "none";
    document.body.style.overflow= 'auto';
  }
}
