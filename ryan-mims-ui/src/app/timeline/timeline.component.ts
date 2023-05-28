import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {

  private timelineContainer: any;

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    console.log(this.timelineContainer);
    event.preventDefault();
    this.timelineContainer.scrollLeft += event.deltaY;
  }

  public showAboutMe: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.timelineContainer = document.querySelector(".timeline-container");
  }

}
