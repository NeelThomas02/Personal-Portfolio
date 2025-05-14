import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule }     from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule }      from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    RouterModule   // if you plan to link to detail pages
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  // Placeholder data—you can replace this with your actual projects
  projects = [
    { title: 'Health Management Tool', summary: 'Full-stack HMT built with React & Node.js', image: 'assets/hmt.png', slug: 'health-management-tool' },
    { title: 'Skill Swap Platform', summary: 'Django-based peer-to-peer skill exchange', image: 'assets/skillswap.png', slug: 'skill-swap-platform' },
    // …add more entries as needed…
  ];
}

