import { Component, Input } from '@angular/core';
import { Experience as WorkExperience } from '../../../core/models/experience.model';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
})
export class ExperienceCard {
  @Input({ required: true }) experience!: WorkExperience;
}