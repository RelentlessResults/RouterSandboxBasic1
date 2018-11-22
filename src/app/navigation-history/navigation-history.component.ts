import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, of, SubscriptionLike } from 'rxjs';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import * as moment from 'moment';
import { switchMap } from 'rxjs/operators';
import { MatSidenav} from '@angular/material';

@Component({
  selector: 'app-navigation-history',
  templateUrl: './navigation-history.component.html',
  styleUrls: ['./navigation-history.component.css']
})
export class NavigationHistoryComponent implements OnInit, OnDestroy {

  private subscription: SubscriptionLike;
  private list: Row[] = [];

  constructor( private location: Location,
               private route: ActivatedRoute,
               private router: Router ) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      // https://angular.io/guide/router#router-events
      if ( event instanceof NavigationEnd ) {
        this.list.unshift(new Row(event as NavigationEnd, moment().toISOString()));
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

class Row {
  constructor(event: NavigationEnd, timestamp: string) {
    this.event = event;
    this.timestamp = timestamp;
  }

  event: NavigationEnd;
  timestamp: String;
}
