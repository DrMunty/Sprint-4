import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class AppComponent {
  title = signal('Món Angular');
  changeTitle() {
    this.title.set('Títol Canviat per Signal!');
  }
}
