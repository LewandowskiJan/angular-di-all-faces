import { Component, OnInit } from '@angular/core';

import { ContentData } from './../../../../shared/content/model/content-data.model';
import { GlobeService } from '../../../../../services/globe.service';
import { UniverseService } from 'src/app/services/universe.service';
import { ContinentService } from 'src/app/services/continent.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-biome',
  templateUrl: './biome.component.html',
  styleUrls: ['./biome.component.scss'],
  providers: [CountryService],
})
export class BiomeComponent implements OnInit {
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
