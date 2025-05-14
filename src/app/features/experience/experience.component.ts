// src/app/features/experience/experience.component.ts
import { Component }    from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

interface Experience {
  role: string;
  company: string;
  dates: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  // TODO: Replace these with your actual roles and dates
  experiences: Experience[] = [
    {
      role: 'Full-Stack Developer Intern',
      company: 'WizDevelopers',
      dates: 'May – Aug 2024',
      responsibilities: [
        'Built Health Management Tool frontend in React',
        'Developed Node.js REST APIs for lab modules',
        'Participated in Agile sprints with daily scrums'
      ]
    },
    {
      role: 'Data Analyst Intern',
      company: 'Tech Elecon',
      dates: 'Jan – Apr 2024',
      responsibilities: [
        'Performed exploratory data analysis on healthcare datasets',
        'Cleaned and normalized data for ML modeling',
        'Presented weekly insights to stakeholders'
      ]
    }
    // …add more entries here…
  ];
}
