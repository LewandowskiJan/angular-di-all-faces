import { Injectable } from '@angular/core';
import { CardData } from '../modules/shared/content/model/card-data.model';

@Injectable({
  providedIn: 'root',
})
export class UniverseService {
  private serviceId: number;

  constructor() {
    this.serviceId = Math.random() * 1000;
  }

  public getServiceData(): CardData {
    return {
      title: 'UniverseService with | <b>provideIn: root</b>  |',
      content: this.serviceId.toFixed(4),
    };
  }
}
