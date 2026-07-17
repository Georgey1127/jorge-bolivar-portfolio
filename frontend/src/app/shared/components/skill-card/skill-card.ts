import { Component, Input } from '@angular/core';
import { SkillCategory } from '../../../core/models/skill.model';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss',
})
export class SkillCard {
  @Input({ required: true }) skillCategory!: SkillCategory;
}