import {Injectable} from '@angular/core';
import {ListItemSummary} from './list-item-summary';
import {Observable, of} from 'rxjs';
import {ListItem, LIST_ITEMS} from './list-item';

interface IdToListItemMap {
  [id: number]: ListItem;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private listItemSummaries: ListItemSummary[] = [];
  private listItemById: IdToListItemMap = {};

  constructor() {
    for (let item of LIST_ITEMS) {
      this.listItemSummaries.push(new ListItemSummary(item.id, item.label));
      this.listItemById[item.id] = item;
    }
  }

  getListItemForId(id: number): Observable<ListItem> {
    console.log('requesting item for id ' + id);
    return of(this.listItemById[id]);
  }

  getSummaries(): Observable<ListItemSummary[]> {
    return of(this.listItemSummaries);
  }

}
