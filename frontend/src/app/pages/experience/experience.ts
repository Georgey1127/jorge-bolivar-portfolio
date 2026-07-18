import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Experience as WorkExperience } from '../../core/models/experience.model';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ExperienceCard } from '../../shared/components/experience-card/experience-card';

@Component({
  selector: 'app-experience',
  imports: [AsyncPipe, SectionTitle, ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences$: Observable<WorkExperience[]>;

  constructor(private portfolioDataService: PortfolioDataService) {
    this.experiences$ = this.portfolioDataService.getExperience();
  }
}