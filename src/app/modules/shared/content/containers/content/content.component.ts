import { Component, Input, OnInit } from '@angular/core';

import { ContentData } from './../../model/content-data.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() data: ContentData;

  constructor() { }

  ngOnInit(): void {
  }

}
