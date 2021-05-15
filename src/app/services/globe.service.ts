import { Injectable } from '@angular/core';

import { CardData } from './../modules/shared/content/model/card-data.model';

@Injectable({
  providedIn: 'any',
})
export class GlobeService {
  serviceId: number;

  constructor() {
    this.serviceId = Math.random() * 1000;
  }

  public getServiceData(): CardData {
    return {
      title: 'GlobeService with | <b>provideIn: any</b>  |',
      content: this.serviceId.toFixed(4),
    };
  }
}
