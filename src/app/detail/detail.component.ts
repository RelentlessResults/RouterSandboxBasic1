import {Component, Input, OnInit} from '@angular/core';
import {ItemService} from '../item.service';
import {ListItem} from '../list-item';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public item: ListItem;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    const idObservable: Observable<number> = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of( +params.get('id')))
    );
    idObservable.subscribe(id => {
      this.item = null;
      this.itemService.getListItemForId( id ).subscribe((item) => {
        this.item = item;
      });
    });
  }

}
