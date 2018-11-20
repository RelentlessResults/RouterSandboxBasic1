import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListItemSummary} from '../list-item-summary';
import {expand} from 'rxjs/operators';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item: ListItemSummary;
  @Input() isExpanded: boolean;
  @Output() expandedChange = new EventEmitter<IdIsExpanded>();

  constructor() { }

  ngOnInit() {
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
    this.expandedChange.emit(new IdIsExpanded(this.item.id, this.isExpanded));
  }

}

export class IdIsExpanded {
  id: number;
  isExpanded: boolean;

  constructor(id: number, isExpanded: boolean) {
    this.id = id;
    this.isExpanded = isExpanded;
  }

}
