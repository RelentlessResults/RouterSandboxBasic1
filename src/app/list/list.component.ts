import { Component, OnInit } from '@angular/core';
import {ListItem} from '../list-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listItems: ListItem[] = [
    {id: 0, label: 'Tilly Hill'},
    {id: 1, label: 'Hassan Hart'},
    {id: 2, label: 'Rosa Woods'},
    {id: 3, label: 'Marie Ramirez'},
    {id: 4, label: 'Rose Fisher'},
    {id: 5, label: 'Willllivan Imogenswoon'},
    {id: 6, label: 'Osullimog'},
    {id: 7, label: 'Dracollivan'},
    {id: 8, label: 'Drusllivan Osudrinker'},
    {id: 9, label: 'Abasullivan Osullivanflame'},
    {id: 10, label: 'Pontiimogen'},
    {id: 11, label: 'Osulliblex Osuflame'},
    {id: 12, label: 'Greenosullivan'},
    {id: 13, label: 'Imogenphira'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
