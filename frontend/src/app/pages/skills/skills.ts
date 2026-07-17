import { Component } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SkillCategory } from '../../core/models/skill.model';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { SkillCard } from '../../shared/components/skill-card/skill-card';

@Component({
  selector: 'app-skills',
  imports: [SectionTitle, SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillCategories: SkillCategory[];

  constructor(private portfolioDataService: PortfolioDataService) {
    this.skillCategories = this.portfolioDataService.getSkills();
  }
}