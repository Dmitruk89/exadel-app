import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }
  isNavigationShown = new Subject<boolean>();
  
}
