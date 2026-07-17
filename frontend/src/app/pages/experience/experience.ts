import { Component } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Experience as WorkExperience } from '../../core/models/experience.model';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ExperienceCard } from '../../shared/components/experience-card/experience-card';

@Component({
  selector: 'app-experience',
  imports: [SectionTitle, ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences: WorkExperience[];

  constructor(private portfolioDataService: PortfolioDataService) {
    this.experiences = this.portfolioDataService.getExperience();
  }
}