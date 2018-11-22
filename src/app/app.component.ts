import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sideNav: MatSidenav;

  constructor(private route: ActivatedRoute ) {
  }

  ngOnInit() {

    this.route
      .queryParamMap
      .pipe(map(params => params.get('showHistory') || 'false'))
      .subscribe( (showHistory) => this.showHistory(showHistory==="true") );
  }

  private showHistory(value: boolean) {
    if (value) {
      this.sideNav.open();
    } else {
      this.sideNav.close();
    }
  }

}
