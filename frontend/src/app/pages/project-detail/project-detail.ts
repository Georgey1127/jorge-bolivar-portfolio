import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../core/models/project.model';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  project?: Project;

  constructor(
    private route: ActivatedRoute,
    private portfolioDataService: PortfolioDataService
  ) {
    const projectId = this.route.snapshot.paramMap.get('id');

    this.project = this.portfolioDataService
      .getProjects()
      .find((project) => project.id === projectId);
  }
}