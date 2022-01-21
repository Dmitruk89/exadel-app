import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }
  isNavShown = false;

  ngOnInit(): void {
    this.navigationService.isNavigationShown.subscribe(data => {
      this.isNavShown = data;
    })
  }

  toggleNavigation(): void {
    this.navigationService.isNavigationShown.next(!this.isNavShown);
  }

}
