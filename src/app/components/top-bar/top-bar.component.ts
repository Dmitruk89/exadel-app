import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { faCartArrowDown, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}
  isNavShown = false;
  faCartArrowDown = faCartArrowDown;
  faBars = faBars;
  faUser = faUser;

  ngOnInit(): void {
    this.navigationService.isNavigationShown.subscribe((data: boolean) => {
      this.isNavShown = data;
    });
  }

  closeNavigation(): void {
    if (this.isNavShown) {
      this.navigationService.isNavigationShown.next(false);
    }
  }

  toggleNavigation(): void {
    this.navigationService.isNavigationShown.next(!this.isNavShown);
  }
}
