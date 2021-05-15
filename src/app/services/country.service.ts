import { Injectable } from '@angular/core';
import { CardData } from '../modules/shared/content/model/card-data.model';

@Injectable()
export class CountryService {
  serviceId: number;

  constructor() {
    this.serviceId = Math.random() * 1000;
  }

  public getServiceData(): CardData {
    return {
      title: 'CountryService, provide in Component without <b>provideIn</b>',
      content: this.serviceId.toFixed(4),
    };
  }
}
