import { NavigationService } from './../../services/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}
  isNavShown = false;

  ngOnInit(): void {
    this.navigationService.isNavigationShown.subscribe((data: boolean) => {
      this.isNavShown = data;
    });
  }

  closeNav(): void {
    this.navigationService.isNavigationShown.next(false);
  }
}
