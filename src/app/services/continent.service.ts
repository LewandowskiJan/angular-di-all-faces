import { Injectable } from '@angular/core';
import { CardData } from '../modules/shared/content/model/card-data.model';

@Injectable()
export class ContinentService {
  serviceId: number;

  constructor() {
    this.serviceId = Math.random() * 1000;
  }

  public getServiceData(): CardData {
    return {
      title:
        'ContinentService, provide in Module without <b>provideIn</b>',
      content: this.serviceId.toFixed(4),
    };
  }
}
