import { Component } from '@angular/core';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css',
})
export class ConfigComponent {
  value!: Number;
  ngOnInit() {
    this.value = Math.floor(Math.random() * 10) + 1;
  }
}
