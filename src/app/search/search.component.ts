import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Route,
  Router,
  RouteReuseStrategy,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { CustomReuseStrategy } from '../custom-reuse-strategy';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [],
})
export class SearchComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  onViewDetails() {
    this.router.navigate(['config'], { relativeTo: this.route });
  }
}
