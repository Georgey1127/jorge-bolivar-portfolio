import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { SkillCategory } from '../../core/models/skill.model';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { SkillCard } from '../../shared/components/skill-card/skill-card';

@Component({
  selector: 'app-skills',
  imports: [AsyncPipe, SectionTitle, SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillCategories$: Observable<SkillCategory[]>;

  constructor(private portfolioDataService: PortfolioDataService) {
    this.skillCategories$ = this.portfolioDataService.getSkills();
  }
}