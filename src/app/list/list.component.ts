import { Component, OnInit } from '@angular/core';
import {ListItemSummary} from '../list-item-summary';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  private summaries: ListItemSummary[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getSummaries().subscribe(summaries => this.summaries = summaries);
  }

}
