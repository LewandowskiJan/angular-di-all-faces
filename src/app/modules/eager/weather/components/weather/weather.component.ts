import { Component, OnInit } from '@angular/core';
import { ContentData } from 'src/app/modules/shared/content/model/content-data.model';
import { ContinentService } from 'src/app/services/continent.service';
import { CountryService } from 'src/app/services/country.service';
import { GlobeService } from 'src/app/services/globe.service';
import { UniverseService } from 'src/app/services/universe.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [CountryService],
})
export class WeatherComponent implements OnInit {
  public contentData: ContentData = {
    data: [],
  };

  constructor(
    private universeService: UniverseService,
    private globeService: GlobeService,
    private continentService: ContinentService,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.contentData.data.push(
      this.universeService.getServiceData(),
      this.globeService.getServiceData(),
      this.continentService.getServiceData(),
      this.countryService.getServiceData()
    );
  }
}
