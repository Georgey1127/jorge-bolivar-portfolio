import { Component } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Project } from '../../core/models/project.model';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [SectionTitle, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[];

  constructor(private portfolioDataService: PortfolioDataService) {
    this.projects = this.portfolioDataService.getProjects();
  }
}