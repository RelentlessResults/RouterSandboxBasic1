import { Component, OnInit } from '@angular/core';
import {ListItemSummary} from '../list-item-summary';
import {ItemService} from '../item.service';
import {IdIsExpanded} from '../list-item/list-item.component';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ListItem} from '../list-item';

class ListItemIsExpanded {
  constructor(summary: ListItemSummary, isExpanded: boolean) {
    this.summary = summary;
    this.isExpanded = isExpanded;
  }
  summary: ListItemSummary;
  isExpanded: boolean;
}

interface DisplayItemMap {
  [id: number]: ListItemIsExpanded;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  private displayItemMap: Map<number, ListItemIsExpanded> = new Map<number, ListItemIsExpanded>();
  private orderedIds: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.itemService.getSummaries().subscribe(summaries => {
      this.orderedIds = [];
      for (const summaryData of summaries) {
        this.displayItemMap.set(summaryData.id, new ListItemIsExpanded(summaryData, false));
        this.orderedIds.push(summaryData.id);
      }
    });
    const expandedObservable: Observable<string> = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of( params.get('expandedItems')))
    );
    expandedObservable.subscribe( expandedIdsString => {
      const expandedIds = JSON.parse(expandedIdsString);
      if ((expandedIds as Array<number>) == null) {
        return;
      }
      for (const idString of <Array<number>>expandedIds) {
        this.displayItemMap.get(idString).isExpanded = true;
      }
    } );
  }

  handleIdExpanded(idExpanded: IdIsExpanded) {
    this.displayItemMap.get(idExpanded.id).isExpanded = idExpanded.isExpanded;
    const expandedIds: number[] = [];
    this.displayItemMap.forEach((itemIsExpanded: ListItemIsExpanded, key: number) => {
      if (itemIsExpanded.isExpanded) {
        expandedIds.push(itemIsExpanded.summary.id);
      }
    });
    this.router.navigate(['.', {'expandedItems': JSON.stringify(expandedIds)}], {relativeTo: this.route});
  }

}
