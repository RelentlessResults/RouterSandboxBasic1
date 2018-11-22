import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  closePopup() {
    this.router.navigate([{outlets: {popup: null}}], {queryParamsHandling: 'preserve'});
  }
}
