import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('openClose', [
      transition('open <=> closed', [animate('.3s')]),
      state(
        'open',
        style({
          left: '0',
        }),
      ),
      state(
        'closed',
        style({
          left: '-100vw',
        }),
      ),
    ]),
  ],
})
export class NavigationComponent {
  isVisible = false;

  hide(): void {
    this.isVisible = false;
  }

  toggle(): void {
    this.isVisible = !this.isVisible;
  }
}
