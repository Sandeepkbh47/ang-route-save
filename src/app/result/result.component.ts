import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent {
  value!: Number;

  ngOnInit() {
    this.value = Math.floor(Math.random() * 10) + 1;
  }
}
