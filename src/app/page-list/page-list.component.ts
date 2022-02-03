import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss'],
})
export class PageListComponent implements OnInit {
  public toDoShow: boolean;

  constructor() {
    this.toDoShow = true;
  }

  ngOnInit(): void {}
}
