import {Component, Input, OnInit} from '@angular/core';
import {ListItemSummary} from '../list-item-summary';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item: ListItemSummary;
  @Input() isExpanded: Boolean;

  constructor() { }

  ngOnInit() {
  }

}
