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

  get item$(): Observable<ListItem> {
    return this._item$;
  }

  private _item$: Observable<ListItem>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    const idObs: Observable<number> = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of( +params.get('id')))
    );
    idObs.subscribe(id => {
      this._item$ = this.itemService.getListItemForId( id );
    });
  }

}
