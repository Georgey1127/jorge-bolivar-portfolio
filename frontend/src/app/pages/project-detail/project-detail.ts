import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { Project } from '../../core/models/project.model';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-project-detail',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  project$: Observable<Project | undefined>;

  constructor(
    private route: ActivatedRoute,
    private portfolioDataService: PortfolioDataService
  ) {
    this.project$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const projectId = params.get('id') ?? '';
        return this.portfolioDataService.getProjectById(projectId);
      })
    );
  }
}