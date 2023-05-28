import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less'],
  animations: [
    trigger('flip', [
      transition(':enter', [
        style({
          transform: 'rotateX(-180deg)'
        }),
        animate('0.125s',
          style({
            transform: 'rotateX(0deg)'
          })),
      ]),
      transition(':leave', [
        style({
          transform: 'rotateX(0deg)'
        }),
        animate('0.125s',
          style({
            transform: 'rotateX(-180deg)'
          })),
      ])
    ]),

    trigger('qr-fade', [
      transition(':leave', [
        style({
          opacity: 1.0
        }),
        animate('1s',
          style({
            opacity: 0.0
          })),
      ])
    ])
  ]
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  public flipped = false;

  private hash: string = window.location.hash;
  public fromQR: boolean = false;

  ngOnInit(): void {
    if(this.hash === '#qr') {
      this.fromQR = true;
      setTimeout(() => {
        this.fromQR = false;
      }, 150);
    }
  }

  flipCard(): void {
    this.flipped = !this.flipped;
  }

}
