import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-about',
  imports: [RouterLink, SectionTitle],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}